// This existing MailerLite group is WRK | Newsletter, verified in the WRK account.
// Keep newsletter signups separate from assessment and guide nurture groups.
export const NEWSLETTER_GROUP_ID = '196923892472742940';
const API = 'https://connect.mailerlite.com/api/subscribers';

export async function subscribeToNewsletter(
  emailInput: unknown,
  apiKey: string | undefined,
  request: typeof fetch = fetch
): Promise<{ status: number; body: { success: boolean; state?: string; error?: string } }> {
  const email = typeof emailInput === 'string' ? emailInput.trim().toLowerCase() : '';
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: 400, body: { success: false, error: 'Enter a valid email address.' } };
  }
  const key = (apiKey || '').replace(/^"|"$/g, '').trim();
  if (!key) return { status: 503, body: { success: false, error: 'Newsletter signup is currently unavailable. Please try again later.' } };
  const headers = { Authorization: `Bearer ${key}`, Accept: 'application/json', 'Content-Type': 'application/json' };
  const unavailable = { status: 502, body: { success: false, error: 'Newsletter signup could not be confirmed. Please try again later.' } };
  try {
    // Do not reactivate unsubscribed, bounced or junk addresses, overwrite fields,
    // remove existing group memberships, or trigger unrelated nurture sequences.
    const existing = await request(`${API}/${encodeURIComponent(email)}`, { headers, signal: AbortSignal.timeout(8000) });
    if (existing.ok) {
      const record = (await existing.json()).data;
      if (!record || !['active', 'unconfirmed'].includes(record.status)) {
        return { status: 409, body: { success: false, error: 'This address cannot be subscribed here. Please contact WRK for help.' } };
      }
      if (record.groups?.some((g: { id: string }) => String(g.id) === NEWSLETTER_GROUP_ID)) {
        return { status: 200, body: { success: true, state: record.status } };
      }
    } else if (existing.status !== 404) {
      return unavailable;
    }
    const response = await request(API, {
      method: 'POST', headers, signal: AbortSignal.timeout(8000),
      body: JSON.stringify({ email, groups: [NEWSLETTER_GROUP_ID] })
    });
    if (!response.ok) return unavailable;
    const record = (await response.json()).data;
    if (!record || !['active', 'unconfirmed'].includes(record.status)
      || !record.groups?.some((g: { id: string }) => String(g.id) === NEWSLETTER_GROUP_ID)) return unavailable;
    return { status: 200, body: { success: true, state: record.status } };
  } catch {
    // Do not log email addresses, credentials or provider response bodies.
    return unavailable;
  }
}

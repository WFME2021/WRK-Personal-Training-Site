import assert from 'node:assert/strict';
import { subscribeToNewsletter, NEWSLETTER_GROUP_ID } from '../services/newsletter.ts';

let passed = 0;
const record = (status = 'active', groups = [NEWSLETTER_GROUP_ID]) => ({ data: { id: 'test', status, groups: groups.map(id => ({ id })) } });
async function check(label: string, responses: Array<{status: number; body?: unknown} | Error>, expected: number, state?: string) {
  const calls: Array<{ url: string; init: RequestInit | undefined }> = [];
  const fake = (async (url: string | URL | Request, init?: RequestInit) => {
    calls.push({ url: String(url), init });
    const next = responses.shift();
    if (next instanceof Error) throw next;
    if (!next) throw new Error('Unexpected request');
    return new Response(JSON.stringify(next.body || {}), { status: next.status });
  }) as typeof fetch;
  const result = await subscribeToNewsletter(' Test@example.com ', 'test-key', fake);
  assert.equal(result.status, expected, label);
  assert.equal(result.body.success, expected === 200, label);
  if (state) assert.equal(result.body.state, state, label);
  for (const {init} of calls.filter(c => c.init?.method === 'POST')) {
    assert.deepEqual(JSON.parse(String(init?.body)), { email: 'test@example.com', groups: [NEWSLETTER_GROUP_ID] });
  }
  if (responses.length) throw new Error(`Unused mock in ${label}`);
  passed++; console.log('PASS', label);
  return calls;
}
assert.equal((await subscribeToNewsletter('', 'key')).status, 400); passed++;
assert.equal((await subscribeToNewsletter('test@example.com', '')).status, 503); passed++;
await check('new active subscriber: correct newsletter group only', [{status:404},{status:201,body:record()}], 200, 'active');
await check('new unconfirmed subscriber: do not claim subscribed', [{status:404},{status:201,body:record('unconfirmed')}],200,'unconfirmed');
await check('existing newsletter member: no mutation', [{status:200,body:record()}],200,'active');
await check('existing active other groups: additive upsert only', [{status:200,body:record('active',['existing-other'])},{status:200,body:record()}],200,'active');
for (const status of ['unsubscribed','bounced','junk']) await check(`preserve ${status}, no mutation`,[{status:200,body:record(status)}],409);
await check('read authentication failure blocks write', [{status:401}],502);
await check('provider write failure cannot claim success', [{status:404},{status:500}],502);
await check('provider missing group cannot claim success', [{status:404},{status:201,body:record('active',[])}],502);
await check('provider wrong status cannot claim success', [{status:404},{status:201,body:record('unsubscribed')}],502);
await check('network failure cannot claim success', [new Error('offline')],502);
await check('malformed provider body cannot claim success', [{status:200,body:{}}],409);
console.log(`${passed} newsletter tests passed. No live network or subscriber writes.`);

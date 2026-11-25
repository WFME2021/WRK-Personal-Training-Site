// Centralised campaign & product hub feature flags and checkout links.
// Flip booleans to false to cleanly hide seasonal intakes or the self-guided catalog.

export const ENABLE_SUMMER_MOMENTUM = true;
export const STRIPE_SUMMER_MOMENTUM_URL = "#stripe-summer-momentum-placeholder";

export const ENABLE_SELF_GUIDED_PLANS = false;

export const MAILERLITE_STARTER_FORM_URL = "#mailerlite-starter-form-placeholder";
export const MYPTHUB_FREE_STARTER_URL = "#mypthub-free-starter-placeholder";

export const isCheckoutUrlConfigured = (url?: string): boolean => {
  if (!url) return false;
  const trimmed = url.trim();
  if (!trimmed || trimmed.startsWith("#")) return false;
  if (trimmed.includes("YOUR_SUMMER_MOMENTUM_LINK") || trimmed.includes("placeholder")) {
    return false;
  }
  return trimmed.startsWith("https://") || trimmed.startsWith("http://");
};

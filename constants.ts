export const BRAND_NAME = "WRK Personal Training";
export const TAGLINE = "the right work, done well.";
export const EMAIL_CONTACT = "info@wrkpersonaltraining.co.nz";
export const LOCATION = "Christchurch, New Zealand";

export const SERVICE_LINKS = [
  { label: "1:1 Personal Training", path: "/personal-training" },
  { label: "Online Coaching", path: "/online-coaching" },
];

export const PROGRAMMES_LINKS = [
  { label: "12-Week Programs", path: "/programs" },
];

export const TOOLS_LINKS = [
  { label: "Tools Hub", path: "/tools" },
  { label: "Protein Targeter", path: "/tools/protein-targeter" },
  { label: "TDEE Calculator", path: "/tools/tdee-calculator" },
  { label: "Hydration & Electrolytes", path: "/tools/hydration-calculator" }
];

// Re-export centralised campaign & self-guided plan flags
export {
  ENABLE_SUMMER_MOMENTUM,
  STRIPE_SUMMER_MOMENTUM_URL,
  ENABLE_SELF_GUIDED_PLANS,
  MAILERLITE_STARTER_FORM_URL,
  MYPTHUB_FREE_STARTER_URL,
  isCheckoutUrlConfigured,
} from "./src/config/campaigns";


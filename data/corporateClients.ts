export interface CorporateClient {
  id: string;
  name: string;
  logoUrl?: string;
  welcomeMessage: string;
  appLink: string;
  primaryColor?: string;
}

export const corporateClients: Record<string, CorporateClient> = {
  "demo-corp": {
    id: "demo-corp",
    name: "Demo Corporation",
    welcomeMessage: "Welcome to the Demo Corp Wellness Program. WRK Personal Training is excited to partner with your team to bring you a comprehensive, 12-month wellness initiative designed to support your health, energy, and performance.",
    appLink: "https://www.mypthub.net/",
  },
  // Add new corporate clients here using their unique URL slug as the key
};

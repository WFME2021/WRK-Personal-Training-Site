export type Domain =
  | "strength"
  | "nutrition"
  | "hydration"
  | "movement"
  | "recovery"
  | "sustainability";

export interface AssessmentOption {
  id: string;
  label: string;
  score?: number;
}

export interface AssessmentQuestion {
  id: string;
  domain?: Domain | "goal" | "context";
  type: "single" | "multiple";
  question: string;
  description?: string;
  options: AssessmentOption[];
}

export interface DomainScore {
  domain: Domain;
  score: number;
  label: string;
}

export interface ActionItem {
  domain: Domain;
  label: string;
  action: string;
}

export interface Recommendation {
  domain: Domain;
  headline: string;
  explanation: string;
  actions: string[];
  firstStep: string;
}

export interface AssessmentResult {
  assessmentVersion: string;
  overallScore: number;
  overallLabel: string;
  domainScores: DomainScore[];
  primaryFocus: Domain;
  secondaryFocus: Domain;
  thirdFocus: Domain;
  goal?: string;
  glp1Status?: string;
  glp1Duration?: string;
  recommendations: Recommendation[];
  sevenDayPlan: ActionItem[];
}

export enum GoalType {
  STRENGTH = 'Strength / Performance',
  PHYSIQUE = 'Physique / Muscle',
  FAT_LOSS = 'Fat Loss + Energy',
  PAIN_FREE = 'Pain-free Training / Durability',
  RESTARTING = 'Restarting after time off'
}

export enum ConstraintType {
  TIME = 'Time (work/family)',
  STRESS = 'Stress load / sleep',
  TRAVEL = 'Travel / inconsistent weeks',
  PAIN = 'Pain risk / previous injury',
  OVERWHELM = 'Too many options / no structure'
}

export enum FrequencyType {
  TWO = '2 sessions',
  THREE = '3 sessions',
  FOUR = '4 sessions',
  FIVE_PLUS = '5+ sessions',
  VARIES = 'Varies week to week'
}

export enum EnvironmentType {
  GYM = 'Full gym',
  HOME = 'Home setup (dumbbells/bands/kettlebell)',
  HOTEL = 'Hotel / minimal equipment',
  MIXED = 'Mixed (gym + home/travel)'
}

export enum InjuryType {
  NONE = 'None',
  SHOULDER = 'Shoulder/neck',
  BACK = 'Back',
  KNEE = 'Knee/hip',
  OTHER = 'Other'
}

export enum SupportType {
  EXECUTE = 'Give me a plan — I’ll execute (low touch)',
  ACCOUNTABLE = 'Keep me accountable + consistent (check-ins)',
  COACHED = 'Tailored + coached properly (maximum precision)'
}

export enum OfferType {
  RESET = '42-Day Reset',
  ONLINE = 'Online Coaching',
  HYBRID = 'Hybrid 1:1 Coaching'
}

export interface AssessmentData {
  goal: GoalType | null;
  constraint: ConstraintType | null;
  frequency: FrequencyType | null;
  environment: EnvironmentType | null;
  injury: InjuryType | null;
  support: SupportType | null;
  recommendedOffer?: OfferType;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  referralSource?: string;
}
// src/types/patient.ts
export type Patient = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  date_of_birth: Date | string;

  gender: "MALE" | "FEMALE";
  marital_status: "single" | "married" | "divorced" | "widowed" | "separated";

  emergency_contact_name: string;
  emergency_contact_number: string;
  relation: "mother" | "father" | "husband" | "wife" | "other";

  blood_group?: string;
  allergies?: string;
  medical_conditions?: string;
  medical_history?: string;

  insurance_provider?: string;
  insurance_number?: string;

  privacy_consent: boolean;
  service_consent: boolean;
  medical_consent: boolean;
};

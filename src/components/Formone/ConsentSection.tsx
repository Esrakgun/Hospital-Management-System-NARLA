import { CustomInput } from "@/components/custom-input";

export const ConsentSection = ({ control }: { control: any }) => {
  return (
    <>
      <h3 className="text-lg font-semibold">Consent</h3>
      <div className="space-y-6">
        <CustomInput
          name="privacy_consent"
          label=" Privacy Policy Agreement"
          placeholder=" I consent to the collection, storage, and use of my
          personal and health information as outlined in the Privacy
          Policy. I understand how my data will be used, who it may
          be shared with, and my rights regarding access,
          correction, and deletion of my data."
          type="checkbox"
          control={control}
        />

        <CustomInput
          control={control}
          type="checkbox"
          name="service_consent"
          label=" Terms of Service Agreement"
          placeholder=" I agree to the Terms of Service, including my
          responsibilities as a user of this healthcare management
          system, the limitations of liability, and the dispute
          resolution process. I understand that continued use of
          this service is contingent upon my adherence to these terms."
        />

        <CustomInput
          control={control}
          type="checkbox"
          name="medical_consent"
          label="Informed Consent for Medical Treatment"
          placeholder="I provide informed consent to receive medical treatment
          and services through this healthcare management system. I
          acknowledge that I have been informed of the nature,
          risks, benefits, and alternatives to the proposed
          treatments and that I have the right to ask questions and
          receive further information before proceeding."
        />
      </div>
    </>
  );
};

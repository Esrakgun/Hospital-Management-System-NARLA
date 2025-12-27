import { CustomInput } from "@/components/custom-input";

export const MedicalInformation = ({ control }: { control: any }) => {
  return (
    <>
      <h3 className="text-lg font-semibold">Medical Information</h3>

      <CustomInput
        type="input"
        control={control}
        name="blood_group"
        placeholder="A+"
        label="Blood group"
      />
      <CustomInput
        type="input"
        control={control}
        name="allergies"
        placeholder="Milk"
        label="Allergies"
      />
      <CustomInput
        type="input"
        control={control}
        name="medical_conditions"
        placeholder="Medical Conditions"
        label="Medical conditions"
      />
      <CustomInput
        type="input"
        control={control}
        name="medical_history"
        placeholder="Medical History"
        label="Medical history"
      />

      <div className="flex flex-col lg:flex-row gap-4">
        <CustomInput
          type="input"
          control={control}
          name="insurance_provider"
          placeholder="Insunrance Provider"
          label="Insurance provider"
        />
        <CustomInput
          type="input"
          control={control}
          name="insurance_number"
          placeholder="7894561230"
          label="Insurance number"
        />
      </div>
    </>
  );
};

import { CustomInput } from "@/components/custom-input";
import { RELATION } from "@/lib";

export const FamilyInformation = ({ control }: { control: any }) => {
  return (
    <>
      <h3 className="text-lg font-semibold">Family Information</h3>

      <CustomInput
        type="input"
        control={control}
        name="emergency_contact_name"
        placeholder="Anne Smith"
        label="Emergency contact name"
      />

      <CustomInput
        type="input"
        control={control}
        name="emergency_contact_number"
        placeholder="7894561230"
        label="Emergency contact"
      />

      <CustomInput
        type="select"
        control={control}
        name="relation"
        placeholder="Select Relation with contact person"
        label="Relation"
        selectList={RELATION}
      />
    </>
  );
};

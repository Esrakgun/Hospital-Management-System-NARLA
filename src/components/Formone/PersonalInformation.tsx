import { CustomInput } from "@/components/custom-input";
import { GENDER, MARITAL_STATUS } from "@/lib";

export const PersonalInformation = ({ control }: { control: any }) => {
  return (
    <>
      <h3 className="text-lg font-semibold">Personal Information</h3>

      <div className="flex flex-col lg:flex-row gap-y-4 items-center gap-2 md:gap-x-4">
        <CustomInput
          type="input"
          control={control}
          name="first_name"
          label="First Name"
          placeholder="John"
        />
        <CustomInput
          type="input"
          control={control}
          name="last_name"
          label="Last Name"
          placeholder="Doe"
        />
      </div>

      <CustomInput
        type="input"
        control={control}
        name="email"
        label="Email Address"
        placeholder="john@example.com"
      />

        <div className="flex flex-col lg:flex-row gap-y-4 items-center gap-2 md:gap-x-4">
        <CustomInput
          type="select"
          control={control}
          name="gender"
          placeholder="Select Gender"
          label="Gender"
          selectList={GENDER}
        />
        <CustomInput
          type="input"
          control={control}
          name="date_of_birth"
          placeholder="01.01.1990"
          label="Date of Birth"
          inputType="date"
        />
      </div>

        <div className="flex flex-col lg:flex-row gap-y-4 items-center gap-2 md:gap-x-4">
        <CustomInput
          type="input"
          control={control}
          name="phone"
          placeholder="7894561230"
          label="Contact Number"
        />
        <CustomInput
          type="select"
          control={control}
          name="marital_status"
          placeholder="Select Marital Status"
          label="Marital Status"
          selectList={MARITAL_STATUS}
        />
      </div>

      <CustomInput
        type="input"
        control={control}
        name="address"
        placeholder="123 Main St, City, Country"
        label="Address"
      />
    </>
  );
};

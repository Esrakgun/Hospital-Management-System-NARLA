"use client";
import { Patient } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Form } from "../ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PatientFormSchema } from "@/lib/schema";
import { z } from "zod";
import { PersonalInformation } from "@/components/Formone/PersonalInformation";
import { FamilyInformation } from "@/components/Formone/FamilyInformation";
import { MedicalInformation } from "@/components/Formone/MedicalInformation";
import { ConsentSection } from "./ConsentSection";
import { createNewPatient, updatePatient } from "@/app/actions/patient";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface DataProps {
  data?: Patient;
  type: "create" | "update";
}

export const NewPatient = ({ data, type }: DataProps) => {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [imgURL, setImgURL] = useState<any>();
  const router = useRouter();

  const userData = {
    first_name: user?.firstName || "",
    last_name: user?.lastName || "",
    email: user?.emailAddresses[0].emailAddress || "",
    phone: user?.phoneNumbers?.toString() || "",
  };

  const userId = user?.id;

  const form = useForm<z.infer<typeof PatientFormSchema>>({
    resolver: zodResolver(PatientFormSchema),
    defaultValues: {
      ...userData,
      address: "",
      date_of_birth: new Date(),
      gender: "MALE",
      marital_status: "single",
      emergency_contact_name: "",
      emergency_contact_number: "",
      relation: "mother",
      blood_group: "",
      allergies: "",
      medical_conditions: "",
      insurance_number: "",
      insurance_provider: "",
      medical_history: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof PatientFormSchema>> = async (
    values
  ) => {
    console.log(values);
    setLoading(true);

    const res =
      type === "create" ? await createNewPatient(values, userId!) : await updatePatient(values,userId!);

    setLoading(false);
    if (res?.success) {
      toast.success(res.msg);
      form.reset();
      router.push("/patient");
    } else {
      console.log(res?.msg);
      toast.error("Failled to create Patient");
    }
  };

  useEffect(() => {
    if (type === "create") {
      userData && form.reset({ ...userData });
    } else if (type === "update") {
      data &&
        form.reset({
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          phone: data.phone,
          date_of_birth: new Date(data.date_of_birth),
          gender: data.gender,
          marital_status: data.marital_status as
            | "married"
            | "single"
            | "divorced"
            | "widowed"
            | "separated",
          address: data.address,
          emergency_contact_name: data.emergency_contact_name,
          emergency_contact_number: data.emergency_contact_number,
          relation: data.relation as
            | "mother"
            | "father"
            | "husband"
            | "wife"
            | "other",
          blood_group: data?.blood_group!,
          allergies: data?.allergies! || "",
          medical_conditions: data?.medical_conditions! || "",
          medical_history: data?.medical_history! || "",
          insurance_number: data.insurance_number! || "",
          insurance_provider: data.insurance_provider! || "",
          medical_consent: data.medical_consent,
          privacy_consent: data.privacy_consent,
          service_consent: data.service_consent,
        });
    }
  }, [user]);

  return (
    <Card className="max-w-6xl w-full p-4 ">
      <CardHeader className="mt-5">
        <CardTitle>Patient Registration</CardTitle>
        <CardDescription>
          Please provide all the information below to help us understand better
          and provide good and quality service to you.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form
            onSubmit={
              form.handleSubmit(onSubmit)
            }
            className="space-y-8 mt-5"
          >
            <PersonalInformation control={form.control} />
            <FamilyInformation control={form.control} />
            <MedicalInformation control={form.control} />
            {type !== "update" && <ConsentSection control={form.control} />}

            <Button
              disabled={loading}
              type="submit"
              className="w-full md:w-fit px-6 mb-2"
            >
              {type === "create" ? "Submit" : "Update"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

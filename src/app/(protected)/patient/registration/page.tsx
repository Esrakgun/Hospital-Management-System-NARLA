
import { getPatientById } from "../../../../../utils/services/patient";
import { NewPatient } from "@/components/Formone/NewPatientForm";
import { auth } from "@clerk/nextjs/server";


const Registration = async () => {
  const { userId } = await auth();

  const { data } = await getPatientById(userId!);
  console.log(data);

  return (
    <div className="py-6 px-3 flex justify-center">
    <NewPatient data={data ?? undefined} type={data ? "update" : "create"} />
    </div>
  );
};

export default Registration;

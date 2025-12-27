import { Separator } from "@radix-ui/react-select";
import { Card } from "../ui/card";
import { Diagnosis, Doctor } from "@prisma/client";


interface ExtendedMedicalRecord extends Diagnosis {
  doctor: Doctor;
}
export const MedicalHistoryCard = ({
  record,
  index,
}: {
  record: ExtendedMedicalRecord;
  index: number;
}) => {
  return (
    <Card className="shadow-none p-5">
      <div className="space-y-6 pt-4">
        <div className="flex gap-x-6 justify-between">
          <div>
            <span className="text-semibol text-red-500">Appointment ID</span>
            <p className="text-xl font-medium"># {record.id}</p>
          </div>
          {index === 0 && (
            <div className="h-8 text-center bg-blue-100 rounded-full font-semibold text-blue-600">
                <span className="p-4 relative top-1">Recent</span>

            </div>
          )}

          <div>
            <span className="text-sm text-gray-500">Date</span>
            <p className="text-xl font-medium">
              {record.created_at.toLocaleDateString()}
            </p>
          </div>
        </div>

        <Separator />

        <div>
          <span className="text-sm text-gray-500">Diagnosis</span>
          <p className="text-lg text-muted-foreground">{record.diagnosis}</p>
        </div>
        <Separator />

        <div>
          <span className="text-sm text-gray-500">Symptoms</span>
          <p className="text-lg text-muted-foreground">{record.symptoms}</p>
        </div>

        <Separator />

        <div>
          <span className="text-sm text-gray-500">Additional Note</span>
          <p className="text-lg text-muted-foreground">{record.notes}</p>
        </div>

        <Separator />

        <div>
          <span className="text-sm text-gray-500">Doctor</span>
          <div>
            <p className="text-lg text-muted-foreground">
              {record.doctor.name}
            </p>
            <span>{record.doctor.specialization}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
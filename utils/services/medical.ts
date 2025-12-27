import { format } from "date-fns";
import prisma from "@/lib/prisma";

export const getVitalSignData = async (id: string) => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const data = await prisma.vitalSigns.findMany({
    where: {
      patient_id: id,
      created_at: { gte: sevenDaysAgo },
    },
    select: {
      created_at: true,
      systolic: true,
      diastolic: true,
      heartRate: true,
    },
    orderBy: { created_at: "asc" },
  });

  // 🔒 KAYIT YOKSA
  if (!data.length) {
    return {
      data: [],
      average: "- / - mg/dL",
      heartRateData: [],
      averageHeartRate: "- bpm",
    };
  }

  const formatVitals = data.map((record) => ({
    label: format(new Date(record.created_at), "MMM d"),
    systolic: record.systolic ?? 0,
    diastolic: record.diastolic ?? 0,
  }));

  const formattedData = data.map((record) => {
    let min = 0;
    let max = 0;

    if (record.heartRate?.includes("-")) {
      const parts = record.heartRate.split("-");
      min = Number(parts[0]?.trim()) || 0;
      max = Number(parts[1]?.trim()) || 0;
    }

    return {
      label: format(new Date(record.created_at), "MMM d"),
      value1: min,
      value2: max,
    };
  });

  const totalSystolic = formatVitals.reduce(
    (sum, r) => sum + r.systolic,
    0
  );

  const totalDiastolic = formatVitals.reduce(
    (sum, r) => sum + r.diastolic,
    0
  );

  const totalValue1 = formattedData.reduce(
    (sum, r) => sum + r.value1,
    0
  );

  const totalValue2 = formattedData.reduce(
    (sum, r) => sum + r.value2,
    0
  );

  const count = data.length;

  const average = `${(totalSystolic / count).toFixed(2)}/${(
    totalDiastolic / count
  ).toFixed(2)} mg/dL`;

  const averageHeartRate = `${(totalValue1 / count).toFixed(2)}-${(
    totalValue2 / count
  ).toFixed(2)} bpm`;

  return {
    data: formatVitals,
    average,
    heartRateData: formattedData,
    averageHeartRate,
  };
};

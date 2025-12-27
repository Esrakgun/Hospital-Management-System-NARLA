import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

type PublicMetadata = {
  role?: string;
};

export default async function AuthCallbackPage() {
  const { sessionClaims } = await auth();

  const role =
    (sessionClaims?.publicMetadata as PublicMetadata)?.role?.toLowerCase() ??
    "patient";

  redirect(`/${role}`);
}

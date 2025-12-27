import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { getRole } from "../../utils/roles";
import Link from "next/link";
import { redirect } from "next/navigation";


export default async function Home() {
  const { userId } = await auth();
  const role = await getRole();

  // if(userId && role){
  //   redirect(`/${role}`);
  // }

  return (
    <div
      className="flex flex-col min-h-screen p-6"
      style={{
        backgroundImage: "url('/G1.PNG')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex-1 flex flex-col items-center justify-center bg-white/30 backdrop-blur-sm rounded-2xl p-8 relative">
        {/* User Button */}
        {userId && (
          <div className="absolute top-4 right-5 halo-hover">
            <UserButton />
          </div>
        )}

        <div className="mb-8">
          <h1 className="text-4xl 2xl:text-7xl xl:text-6xl md:text-5xl font-bold text-center">
            Welcome to <br />
            <span className="text-blue-700 text-5xl md:text-6xl">
              NARLA Healthcare
            </span>
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center max-w-xl">
          <p className="mb-8 text-center">
            Narla Health Group brings together modern medical technologies...
          </p>

          {!userId ? (
            <div className="flex gap-4">
              <Link href="/sign-up">
                <Button className="md:text-base font-light">New Patient</Button>
              </Link>

              <Link href="/sign-in">
                <Button
                  variant="outline"
                  className="md:text-base hover:text-blue-600"
                >
                  Login to Account
                </Button>
              </Link>
            </div>
          ) : (
            <Link href={role ? `/${role}` : "/sign-in"}>
              <Button className="md:text-base font-light hover:bg-blue-600 hover:border-blue-600">
                View Dashboard
              </Button>
            </Link>
          )}
        </div>
      </div>
      <footer className="mt-8 bg-white/70 backdrop-blur-sm rounded-xl py-2 ease-out hover:scale-[1.02]">
        <p className="text-center text-sm">
          &copy; 2025 NARLA Healthcare Management System. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

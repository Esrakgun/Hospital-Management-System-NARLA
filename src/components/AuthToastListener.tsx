"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { useEffect, useRef } from "react";
import { Toast } from "@/lib/toast";

export default function AuthToastListener() {
  const { isSignedIn } = useAuth();
  const { user, isLoaded } = useUser();
  const hasShownRef = useRef(false);

  useEffect(() => {
    if (!isLoaded) return; 

    if (isSignedIn && user && !hasShownRef.current) {
      const role = user.publicMetadata.role as string | undefined;

      Toast.signinSuccess(role);
      hasShownRef.current = true;
    }
  }, [isSignedIn, user, isLoaded]);

  return null;
}

"use client";
import useAuth from "@/app/lib/AuthContext";
import { useLayoutEffect } from "react";
import { redirect, usePathname } from "next/navigation";

function Protected({ children }) {
  const { user } = useAuth();
  const returnUrl = usePathname();
  useLayoutEffect(() => {
    console.dir(user?.emailVerified);
    if (!user) {
      console.log("User not logged!");
      redirect(`/users/signin?returnUrl=${returnUrl}`);
    }
    if (!user?.emailVerified) {
      console.log("User not verified!");
      redirect(`/users/verified`);
    }
  }, []);
  return <>{children}</>;
}
export default Protected;

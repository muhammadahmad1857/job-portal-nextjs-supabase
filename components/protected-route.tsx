"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";
// usePathname
const ProtectedRoute = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // user
  const { isSignedIn, isLoaded } = useUser();
  //   const pathname = usePathname();
  const router = useRouter();

  if (isLoaded && !isSignedIn && isSignedIn !== undefined) {
    router.push("/?sign-in=true");
    return null;
  }
  return children;
};
export default ProtectedRoute;

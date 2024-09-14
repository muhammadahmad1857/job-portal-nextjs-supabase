"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";

const Header = () => {
  const searchParams = useSearchParams(); // To get search params
  const router = useRouter(); // To update the URL
  const [showSignIn, setShowSignIn] = useState<boolean>(false);

  // Similar to useEffect
  useEffect(() => {
    if (searchParams.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [searchParams]);

  // Function to handle overlay click
  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);

      // Remove the search params by pushing an empty search query
      router.push(window.location.pathname); // Removes all query params
    }
  };
  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link href={"/"}>
          <img src={"/logo.png"} alt="Hirrd" className="h-20" />
        </Link>
        <div className="flex gap-8">
          <SignedOut>
            <Button variant={"outline"} onClick={() => setShowSignIn(true)}>
              Login
            </Button>{" "}
          </SignedOut>
          <SignedIn>
            <Link href="/post-jobs">
              <Button variant={"destructive"} className="rounded-full">
                <PenBox size={20} className="mr-2" />
                Post a Job
              </Button>
            </Link>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Jobs"
                  labelIcon={<BriefcaseBusiness size={15} />}
                  href="/myjobs"
                />
                <UserButton.Link
                  label="Saved Jobs"
                  labelIcon={<Heart size={15} />}
                  href="/saved-jobs"
                />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </nav>
      {showSignIn && (
        <div
          className="fixed inset-0 flex z-50 items-center justify-center bg-black bg-opacity-50"
          onClick={handleOverlayClick}
        >
          <SignIn
            routing="hash"
            signUpForceRedirectUrl={"/onboarding"}
            fallbackRedirectUrl={"/onboarding"}
          />
        </div>
      )}
    </>
  );
};

export default Header;

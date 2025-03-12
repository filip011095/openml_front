"use client";

import { UserButton, useUser, SignIn } from "@clerk/nextjs";

export default function Home() {

  return (
        <SignIn signUpUrl="/sign-up" routing="hash" />
  );
}

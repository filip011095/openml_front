"use client";

import { UserButton, useUser, SignUp } from "@clerk/nextjs";

export default function Home() {

  return (
        <SignUp signInUrl="/" routing="hash" />
  );
}

"use client";

import {  SignIn } from "@clerk/nextjs";

export default function Home() {

  return (
        <SignIn signUpUrl="/sign-up" afterSignInUrl="/sign-up/complete"  afterSignUpUrl="/sign-up/complete" routing="hash" 
        
        />
  );
}

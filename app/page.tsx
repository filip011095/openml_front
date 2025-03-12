"use client";

import { UserButton, useUser, SignIn } from "@clerk/nextjs";

export default function Home() {

  return (
        <SignIn signUpUrl="/sign-up" routing="hash"
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
          },
          elements: {

            card: "w-full max-w-md", // Increased width
            headerTitle: "text-2xl font-bold", // Larger title font
            headerSubtitle: "text-lg", // Larger subtitle
            socialButtons: "gap-5", // Adjust button spacing
            formButtonPrimary: "bg-blue-500 hover:bg-blue-600 text-white text-lg", // Customize button
          }
        }}
        />
  );
}

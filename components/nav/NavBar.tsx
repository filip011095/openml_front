"use client";

import { useUser, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const { isSignedIn, user } = useUser();
  return (
    <div className="flex justify-between items-center p-4 h-19 border-b shadow-sm bg-white unset top-0 w-full">
      <Link href="/">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="Affordify AI" width={171} height={44} />
        </div>
      </Link>

      <div className="flex items-center gap-4">
        {isSignedIn ? (
          <>
            <UserButton afterSignOutUrl="/" />
          </>
        ) : (
          <p className="text-sm text-gray-600 mt-2"></p>
        )}
      </div>
    </div>
  );
}

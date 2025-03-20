"use client";

import { useUser, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
    const { isSignedIn, user } = useUser();
  return (
    <div className="flex justify-between items-center p-4 h-20 border-b shadow-sm bg-white sticky top-0 w-full">
 
      <Link href="/">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Affordify AI" width={200} height={40} />
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

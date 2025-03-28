"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/utils/constants";
import classNames from "classnames";

const Sidebar = () => {
  const pathname = usePathname();
  const [isDashboardOpen, setIsDashboardOpen] = useState(true);
  const isDashboardActive =
    pathname === "/" || pathname.startsWith("/dashboard");

  return (
    <aside className="w-[300px] h-full border-r bg-white px-6 py-6">
      <nav className="flex flex-col space-y-2.5">
        {/* Dashboard Section */}
        <div>
          <button
            onClick={() => setIsDashboardOpen(!isDashboardOpen)}
            className={classNames(
              "flex items-center w-full text-[16px] font-semibold p-2.5 rounded-md",
              {
                "bg-[#EFF6FD] text-[#1976E1]": isDashboardActive,
                "text-[#1976E1] hover:text-blue-800": !isDashboardActive,
              }
            )}
          >
            <img className="mr-2" src="./dashboard/side-1.png" alt="" />
            Dashboard
          </button>
          {isDashboardOpen && (
            <div className=" ml-9 mt-5 space-y-1">
              <Link
                href="/dashboard"
                className={classNames(
                  "flex items-center text-[16px] py-1 relative before:absolute before:left-[-27px] before:top-[-21px] before:bottom-0 before:w-[27px] before:h-[38px] before:bg-white before:border-l-[1.5px] before:border-b-[1.5px] before:rounded-bl-[8px] before:border-[#AEAFB3] before:z-2",
                  {
                    "text-[#1976E1] font-semibold": pathname === "/dashboard",
                    "text-[#2A2A33]": pathname !== "/dashboard",
                  }
                )}
              >
                <img src="./dashboard/e.png" className="mr-2" alt="" />
                My Dashboard
              </Link>
              <Link
                href="/dashboard/invite"
                className={classNames(
                  "flex mb-3 items-center text-[16px] mt-3  relative before:absolute before:left-[-27px] before:top-[-37px] before:bottom-0 before:w-[27px] before:h-[50px] before:bg-white before:border-l-[1.5px] before:border-b-[1.5px] before:rounded-bl-[8px] before:border-[#AEAFB3]",
                  {
                    "text-[#1976E1] font-semibold":
                      pathname === "/dashboard/invite",
                    "text-[#2A2A33]": pathname !== "/dashboard/invite",
                  }
                )}
              >
                <img src="./dashboard/e.png" className="mr-2" alt="" />
                <img src="./dashboard/user-plus.png" className="mr-2" alt="" />
                Invite a New Member
              </Link>
            </div>
          )}
        </div>
        {navItems.map(({ id, label, icon, extraIcon, href }) => {
          const isActive = pathname.startsWith(href);

          return (
            <Link
              key={id}
              href={href}
              className={classNames(
                "flex items-center mt-[-10px] p-2.5 w-[240px] rounded-md",
                {
                  "bg-[#EFF6FD] text-[#1976E1]": isActive,
                  "text-[#2A2A33] hover:text-[#1976E1]": !isActive,
                }
              )}
            >
              <img className="mr-2" src={icon} alt="" />
              {label}
              {extraIcon && <img className="ml-2" src={extraIcon} alt="" />}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;

"use client";

import { useState } from "react";

const Sidebar = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(true);

  return (
    <aside className="w-64 h-full border-r bg-white px-4 py-6">
      <nav className="flex flex-col space-y-4">
        {/* Dashboard section */}
        <div>
          <button
            onClick={() => setIsDashboardOpen(!isDashboardOpen)}
            className="flex items-center w-full text-[#1976E1] text-[16px] font-semibold hover:text-blue-800"
          >
            <img className="mr-2" src="./dashboard-ico.png" alt="" />
            Dashboard
          </button>
          {isDashboardOpen && (
            <div className="ml-6 mt-2 space-y-1 text-sm">
              <a href="#" className="text-blue-600 hover:underline">
                My Dashboard
              </a>
              <a
                href="#"
                className="flex items-center text-blue-600 hover:underline"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 9v3h3m-6 3H9m-3 0H3m6 0v-3m0-3V6m0 6h6"
                  />
                </svg>
                Invite a New Member
              </a>
            </div>
          )}
        </div>

        {/* Navigation Items */}
        <a
          href="#"
          className="flex items-center text-gray-700 hover:text-blue-600"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h18M3 6h18M3 14h18M3 18h18"
            />
          </svg>
          Connected Accounts
        </a>

        <a
          href="#"
          className="flex items-center text-gray-700 hover:text-blue-600"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
            />
          </svg>
          Your Financial Summary
        </a>

        <a
          href="#"
          className="flex items-center text-gray-700 hover:text-blue-600"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 6h14M5 12h14M5 18h14"
            />
          </svg>
          Your Reports
        </a>

        <a
          href="#"
          className="flex items-center text-gray-700 hover:text-blue-600"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.062 6.334a1 1 0 00.95.69h6.667c.969 0 1.371 1.24.588 1.81l-5.4 3.915a1 1 0 00-.364 1.118l2.062 6.334c.3.921-.755 1.688-1.538 1.118l-5.4-3.915a1 1 0 00-1.176 0l-5.4 3.915c-.783.57-1.838-.197-1.538-1.118l2.062-6.334a1 1 0 00-.364-1.118l-5.4-3.915c-.783-.57-.38-1.81.588-1.81h6.667a1 1 0 00.95-.69l2.062-6.334z"
            />
          </svg>
          Home Affordability AI
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;

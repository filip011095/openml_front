import React from "react";
import MoneyManagementRating from "@/components/dashboard/MoneyManagementRating";
import AffordabilityScoreChart from "@/components/dashboard/AffordabilityScoreChart";
import AccountTable from "@/components/dashboard/AccountTable";

export default function AffordabilityDashboard() {
  const current = 20000;
  const goal = 32200;
  const max = 32200;

  const currentPercent = (current / max) * 100;
  const goalPercent = (goal / max) * 100;
  const tickSteps = [0, 5000, 10000, 15000, 20000, 25000, 30000];

  return (
    <div className="min-h-full space-y-5">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-[#2A2A33] ">
          Affordability Dashboard
        </h1>
        <div className="flex justify-end gap-4  min-w-[700px]">
          <button className="bg-white border border-[#1976E1] text-[#1976E1] font-semibold  px-6 py-3 rounded-xl text-[18px] ">
            See as JSON
          </button>
          <button className="bg-white border border-[#1976E1] text-[#1976E1]  font-semibold px-6 py-3 rounded-xl text-[18px]">
            Generate Report
          </button>
          <button className="bg-[#1976E1] border border-[#1976E1] text-white font-semibold px-6 py-3 rounded-xl text-[18px] flex items-center">
            <img
              src="./dashboard/user-plus-white.png"
              className="w-4 h-4 mr-1"
            />{" "}
            Invite New Member
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex">
          <div className="flex flex-col justify-between space-y-4">
            {/* Row 1 */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm w-full md:w-[48%]">
                <div className="flex justify-between items-center">
                  <p className="text-[24px] text-[#2A2A33] mb-1">
                    Property of Interest cost
                  </p>
                  <img
                    src="./dashboard/edit.png"
                    alt="Edit"
                    className=" cursor-pointer"
                  />
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="bg-[#EFF6FD] w-full p-3 text-[20px] text-[#2A2A33] font-bold rounded-xl">
                    $240,000
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm w-full md:w-[48%]">
                <div className="flex justify-between ">
                  <p className="text-[24px] text-[#2A2A33] mb-1">
                    Estimated Budget you can afford
                  </p>
                  <select className="text-sm text-[#2A2A33] border rounded px-2 py-1 h-[30px]">
                    <option>Total</option>
                    <option>Annual</option>
                    <option>Monthly</option>
                  </select>
                </div>

                <div className="flex justify-between items-center mt-2.5">
                  <span className="text-[36px] text-[#2A2A33] font-bold">
                    $230,000
                  </span>
                </div>
              </div>
            </div>
            {/* Row 2 */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-white rounded-xl p-5 shadow-sm w-full md:w-[48%]">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-[24px] font-semibold text-[#2A2A33] flex items-center">
                    Home Expenses Goal Tracker
                    <img
                      src="./dashboard/info.png"
                      className="ml-1"
                      alt="info"
                    />
                  </h3>
                  <img
                    src="./dashboard/edit.png"
                    className=" cursor-pointer"
                    alt="edit"
                  />
                </div>

                <div className="w-full max-w-[640px] px-4 py-6 mx-auto">
                  {/* Top Labels */}
                  <div className="relative h-12 mb-5">
                    <div
                      className="absolute text-center"
                      style={{
                        left: `${currentPercent}%`,
                        transform: "translateX(-50%)",
                      }}
                    >
                      <div className="text-[14px] font-semibold text-neutral-800 leading-tight">
                        Current Savings
                      </div>
                      <div className="text-[18px] font-semibold text-neutral-900">
                        ${current.toLocaleString()}
                      </div>
                    </div>

                    <div
                      className="w-[100px] absolute text-right"
                      style={{
                        left: `${goalPercent}%`,
                        transform: "translateX(-96%)",
                      }}
                    >
                      <div className="text-sm  text-neutral-800">
                        Estimated Goal
                      </div>
                      <div className="text-[14px] text-neutral-900">
                        ${goal.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative h-[24px] bg-gray-100">
                    {/* Current Marker */}
                    <div
                      className="absolute top-[-13px] h-[98px] flex flex-col items-center"
                      style={{
                        left: `${0}%`,
                        transform: "translateX(-50%)",
                      }}
                    >
                      <div className="h-25 border-1  border-[#D9D9D9] mt-[2px]" />
                    </div>
                    {/* Filled Bar */}
                    <div
                      className="absolute h-[24px]  bg-[#1976E1]"
                      style={{ width: `${currentPercent}%` }}
                    />

                    {/* Current Marker */}
                    <div
                      className="absolute top-[-14px] h-[98px] flex flex-col items-center"
                      style={{
                        left: `${currentPercent}%`,
                        transform: "translateX(-50%)",
                      }}
                    >
                      <div className="w-[6px] h-[6px] rounded-full bg-[#1976E1]" />
                      <div className="h-25 border-1 border-dashed border-[#1976E1] mt-[2px]" />
                    </div>

                    {/* Goal Marker */}
                    <div
                      className="absolute top-[-14px] flex flex-col items-center"
                      style={{
                        left: `${goalPercent}%`,
                        transform: "translateX(-40%)",
                      }}
                    >
                      <div className="w-[6px] h-[6px] rounded-full bg-[#D9D9D9]" />
                      <div className="h-23 border-l border-dashed border-[#D9D9D9] mt-[2px]" />
                    </div>
                  </div>

                  {/* Tick Axis */}
                  <div className="relative mt-10 h-6">
                    {/* Horizontal Line */}
                    <div className="absolute top-5 left-0 w-full h-[1px] bg-gray-300" />

                    {/* Ticks and Labels */}
                    {tickSteps.map((val, index) => {
                      const percent = (val / max) * 100;
                      return (
                        <div
                          key={val}
                          className="absolute flex flex-col items-center"
                          style={{
                            left: `${percent}%`,
                            top: "16px",
                            transform: "translateX(-50%)",
                          }}
                        >
                          <div className="h-[9px] w-px bg-gray-400" />
                          <div className="text-xs text-gray-800 mt-1">
                            {val.toLocaleString()}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-[#EFF6FD] p-3 rounded-xl text-[#2A2A33] text-[16px] mt-4 mb-3">
                  <p>
                    Estimated Timeline: <strong>45 Months</strong>
                  </p>
                  <p>
                    Monthly Savings: <strong>$500</strong>
                  </p>
                </div>

                <a href="#" className="text-[16px] text-[#1976E1] ">
                  Want to achieve your goal earlier? Get suggestions
                </a>
              </div>

              <MoneyManagementRating value={56} />
            </div>
          </div>
          <AffordabilityScoreChart score={76} />
        </div>
        {/* Row 3 */}
        <div className="flex flex-wrap gap-6">
          <AccountTable />

          <div className="flex flex-col justify-between bg-white rounded-lg p-4 shadow-sm w-full md:w-[32%]">
            <div>
              <p className="font-semibold text-[24px] mb-3 text-[#2A2A33]">
                Financial Insights
              </p>
              <ul className="list-disc pl-8 text-[16px] text-[#2A2A33] space-y-2 list-image-check flex flex-col justify-center items-center">
                <li className="">
                  A €10,000 downpayment allows you to afford a mortgage of up to
                  €1,900 per month
                </li>
                <li>
                  A €10,000 downpayment allows you to afford a mortgage of up to
                  €1,900 per month
                </li>
              </ul>
            </div>
            <a href="#" className="block mt-3 text-[16px] text-[#1976E1] ">
              Get more Insights and Suggestions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

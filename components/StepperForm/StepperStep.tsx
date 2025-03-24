import React, { useState } from "react";

interface StepperStepProps {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  handleBankConnect: () => void;
  openManualDialog: () => void;
}

export default function StepperStep({ currentStep, nextStep, prevStep, handleBankConnect, openManualDialog}: StepperStepProps) {
  const [downPayment, setDownPayment] = useState("10000");
  const [selectedSources, setSelectedSources] = useState({
    bankSavings: true,
    cashSavings: false,
    extraIncome: false,
  });
  type SourceKey = 'bankSavings' | 'cashSavings' | 'extraIncome';


  const toggleSource = (source: SourceKey) => {
    setSelectedSources((prev) => ({ ...prev, [source]: !prev[source] }));
  };

  return (
    <div className="w-xl p-8 bg-white shadow-md rounded-lg">
       {currentStep === 1 && (
          <div>
          <h1 className="text-4xl text-[#2A2A33] font-bold mb-9">Basic information</h1>
          
          <div className="mb-6">
              <p className="font-semibold text-[#2A2A33] mb-2">Are you a first-time homebuyer?</p>
              <p className="text-[#2A2A33] text-sm mb-2">First-time homebuyers may be eligible for special benefits that can reduce mortgage costs and improve affordability</p>
              <div className="flex space-x-4">
                  <button className="w-1/2 py-2 border border-[#CECECE] rounded-lg text-center text-[#2A2A33]">Yes</button>
                  <button className="w-1/2 py-2 border border-[#CECECE] rounded-lg text-center text-[#2A2A33]">No</button>
              </div>
          </div>

          <div className="mb-4">
              <label className="font-semibold block mb-2 text-[#2A2A33]">Enter Your Down Payment Amount</label>
              <p className="text-[#2A2A33] text-sm mb-2">A higher down payment lowers your mortgage and increases affordability</p>
              <input 
                  type="text" 
                  className="w-2/3 border border-[#cecece] rounded-lg p-2 text-black" 
                  value={`$ ${downPayment}`} 
                  onChange={(e) => setDownPayment(e.target.value.replace(/\D/g, ''))}
              />
          </div>

          <div className="mb-4">
              <label className="font-semibold block mb-1 text-[#2A2A33]">Down Payment Sources</label>
              <div className="flex items-center space-y-2">
                <div>
                  <div className="flex items-center space-x-2">
                      <input 
                          type="checkbox" 
                          className="w-5 h-5" 
                          checked={selectedSources.bankSavings} 
                          onChange={() => toggleSource('bankSavings')} 
                      />
                      <label className="font-semibold text-[14px] text-[#2A2A33]">Bank Savings</label>
                  </div>
                  <p className="text-[#2A2A33] text-sm ml-7">I have money in my bank account</p>
                  </div>
                  {selectedSources.bankSavings && (
                      <input 
                          type="text" 
                          className="w-2/8 border rounded-lg p-2 ml-6" 
                          value={`$ ${downPayment}`} 
                          onChange={(e) => setDownPayment(e.target.value.replace(/\D/g, ''))}
                      />
                  )}
              </div>
              <div className="flex items-center space-y-2">
  
                <div>
                  <div className="flex items-center space-x-2">
                      <input 
                          type="checkbox" 
                          className="w-5 h-5" 
                          checked={selectedSources.cashSavings} 
                          onChange={() => toggleSource('cashSavings')} 
                      />
                      <label className="font-semibold text-[14px] text-[#2A2A33]">Cash Savings</label>
                  </div>
                  <p className="text-[#2A2A33] text-sm ml-7">I have savings in cash</p>
                  </div>
                  {selectedSources.cashSavings && (
                      <input 
                          type="text" 
                          className="w-2/8 border rounded-lg p-2 ml-24" 
                          value={`$ ${downPayment}`} 
                          onChange={(e) => setDownPayment(e.target.value.replace(/\D/g, ''))}
                      />
                  )}
                 
              </div>
              <div className="flex items-center space-y-2 mt-2">
              <div>
                  <div className="flex items-center space-x-2">
                      <input 
                          type="checkbox" 
                          className="w-5 h-5" 
                          checked={selectedSources.extraIncome} 
                          onChange={() => toggleSource('extraIncome')} 
                      />
                      <label className="font-semibold text-[14px] text-[#2A2A33]">Expected Extra Income</label>
                  </div>
                  <p className="text-[#2A2A33] text-sm ml-7">I expect a one-time extra income</p>
                  </div>
                  {selectedSources.extraIncome && (
                      <input 
                          type="text" 
                          className="w-2/8 border rounded-lg p-2 ml-8" 
                          value={`$ ${downPayment}`} 
                          onChange={(e) => setDownPayment(e.target.value.replace(/\D/g, ''))}
                      />
                  )}
              </div>
              <div className="flex justify-end mt-24">
                 <button onClick={nextStep}  className="flex items-center justify-center mt-4 px-4 py-2 w-38  bg-[#2286EA] text-white rounded">
                 Next
            </button></div>
             
          </div>
                </div>
        )}
  {currentStep === 2 && (
          <div className="flex flex-col h-full justify-between">
            <div>
                <h2 className="text-4xl text-[#2A2A33] font-bold mb-10">Bank Account Connection</h2>
                <p className=" text-[#2A2A33] text-[14px] pr-13">To check your affordability, securely connect your bank account using one of the available options. This allows for an accurate assessment based on your financial data while ensuring a safe and protected process.</p>

            </div>
            <div className="">
                <button onClick={handleBankConnect} className="flex items-center justify-center mt-4 px-4 py-2 w-full h-12 bg-[#2286EA] text-white rounded">
                 Connect in automatic with <img src="./visa_ico.png" alt="" className="w-13 ml-2" />
                    
                </button>
                <button onClick={openManualDialog}   className="mt-2 px-4 py-2 w-full h-12 bg-white text-[#2286EA] border-1 border-[#2286EA] rounded">
                Connect Manually
                </button>
                <button onClick={prevStep} className="mt-2 px-4 py-2 w-full h-12 bg-white text-[#2286EA] border-1 border-[#2286EA] rounded">
                Back
                </button>
            </div>

            <div className="flex flex-col items-start absolute right-[-55%] top-[26px]">
                <h2 className="text-2xl text-[#2A2A33] font-bold mb-3">Helpful Hint</h2>
                <p className="text-[#2A2A33] mb-3 font-semibold">Why connect your bank?</p>
                <p className=" text-[#2A2A33] w-80 text-[14px] mb-3">Connect your bank securely for instant verification. Open Banking serves as a secure form of identity validation and enables access to the information required to proceed</p>
                <p className="text-[#2A2A33] mb-3 font-semibold">What do I need to do?</p>
                <p className=" text-[#2A2A33] w-80 text-[14px] mb-3" >Simply tap the ‘Connect’ button below, and permission will be requested to access the data needed to verify your details. You will be redirected to your bank’s secure portal to log in to your online banking account as usual. Once completed, you will be brought back here to continue</p>
                <p className=" text-[#2A2A33] mb-3 font-semibold">What is Open Banking?</p>
                <p className=" text-[#2A2A33] w-83 text-[14px] mb-3" >Open Banking is a government-backed standard that allows you to share your bank transactions securely with any company. All Open Banking providers are authorized by the Financial Conduct Authority (FCA)</p>
                <p className=" text-[#2A2A33] mb-3 font-semibold" >How do we keep your data safe?</p>
                <p className="text-[#2A2A33] w-83 text-[14px] mb-3">An intermediary is used to securely access your banking data and keep it protected. All application and user access logs are stored centrally and monitored.<br/>
                Only accounts and transactions you select are submitted to Service Name</p>
          </div>
          </div>
          
         
        )}
      {currentStep === 3 && (
        <div>
          <h2 className="text-2xl font-bold">Calculate Affordability</h2>
          <p className="text-gray-600">Let's calculate your affordability score.</p>
        </div>
      )}
    </div>
  );
}
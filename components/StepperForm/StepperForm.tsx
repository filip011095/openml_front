"use client";

import { useState, useEffect } from "react";
import StepperSidebar from "./StepperSidebar";
import StepperStep from "./StepperStep";
import StepperDialog from "./StepperDialog";
import { useBankConnection } from "../../hooks/useBankConnection";
import { steps } from "../../utils/constants";

export default function StepperForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const {
    isDialogOpen,
    closeDialog,
    handleBankConnect,
    authorizationCode,
    isManualDialogOpen,
    openManualDialog,
    closeManualDialog,
  } = useBankConnection();

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const handleVisaMessage = (event: MessageEvent) => {
      if (event.data?.source === 'visa-sdk') {
        const { code, credentialsId } = event.data;
        console.log('Received from iframe:', code, credentialsId);
  
        // ✅ Do something with code & credentialsId here
        // e.g. send to backend to exchange for access token, etc.
  
        // ✅ Automatically close the iframe/modal
        closeDialog?.();
        nextStep();
      }
    };
  
    window.addEventListener('message', handleVisaMessage);
  
    return () => {
      window.removeEventListener('message', handleVisaMessage);
    };
  }, [closeDialog]);

  return (
    <div className="flex p-8 h-[800px] relative mt-[-100px]">
      <StepperSidebar steps={steps} currentStep={currentStep} />
      <StepperStep
        currentStep={currentStep}
        nextStep={nextStep}
        prevStep={prevStep}
        handleBankConnect={handleBankConnect}
        openManualDialog={openManualDialog}
      />
    {isDialogOpen && (
        <StepperDialog
          authorizationCode={authorizationCode}
          closeDialog={closeDialog}
        />
      )}
      {isManualDialogOpen && (
        <StepperDialog
          isManualDialogOpen={isManualDialogOpen}
          closeManualDialog={closeManualDialog}
        />
      )}
    </div>
  );
}
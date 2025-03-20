"use client";

import { useState } from "react";
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
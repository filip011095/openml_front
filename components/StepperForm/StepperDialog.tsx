import React, { useEffect, useRef } from "react";

interface StepperDialogProps {
  authorizationCode?: string;
  closeDialog?: () => void;
  isManualDialogOpen?: boolean;
  closeManualDialog?: () => void;
}

export default function StepperDialog({
  authorizationCode,
  closeDialog,
  isManualDialogOpen,
  closeManualDialog,
}: StepperDialogProps) {
  const clientId = process.env.NEXT_PUBLIC_TINK_CLIENT_ID;
  const dialogRef = useRef<HTMLDivElement>(null);

  // Handle click outside for automatic dialog
  useEffect(() => {
    
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node) &&
        closeDialog
      ) {
        closeDialog();
      }
    };

    if (authorizationCode && closeDialog) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [authorizationCode, closeDialog]);
 

  return (
    <>
      {/* Automatic Connection Dialog */}
      {authorizationCode && closeDialog && (
        <div className="fixed inset-0 bg-[#2a2a337a] bg-opacity-50 flex items-center justify-center">
          <div ref={dialogRef} className="modal-content bg-white p-0 rounded-lg shadow-lg">
            <iframe
              src={`https://link.visa.com/1.0/transactions/connect-accounts?client_id=${clientId}&redirect_uri=http://localhost:3000/onboarding&authorization_code=${authorizationCode}&market=US`}
              className="w-full h-[450px]"
            ></iframe>
          </div>
        </div>
      )}

      {/* Manual Connection Dialog */}
      {isManualDialogOpen && closeManualDialog && (
        <div className="fixed inset-0 bg-[#2a2a337a] flex items-center justify-center">
          <div className="modal-content bg-white p-15 rounded-lg shadow-lg w-[650px]">
            <h2 className="text-2xl text-[#2A2A33] font-bold mb-4 ">Add Your Bank Account Manually</h2>
            <p className="text-[#2A2A33] text-[14px] mb-4 w-[450px]">Upload your bank statements below to continue connecting your bank account</p>
            <div className="bg-[#EBF5FF] p-15 text-center rounded-md flex flex-col justify-center items-center mt-6">
              <img src="/file_plus.png" alt="" className="w-[46px] cursor-pointer" />
              <p className=" text-[#2A2A33] text-[14px] font-semibold mt-4"> <span className="text-[#2286EA] cursor-pointer">Click to upload</span> a file or drag and drop it here</p>
              <p className="text-sm text-[#2A2A33] text-[14px] mt-1">Supported file types: PDF, CSV, JPEG, PNG</p>
            </div>
            <div className="flex justify-between mt-30">
              <button onClick={closeManualDialog} className="px-15 py-2 bg-white border-1 border-[#2286EA] text-[#2A2A33] rounded-xl mr-2">
                Cancel
              </button>
              <button onClick={closeManualDialog} className="px-8 py-4 bg-[#2286EA] opacity-50 text-white rounded-xl">
                Add Bank Account
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
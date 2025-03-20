import { useState, useEffect } from "react";
import { useAuth } from "@clerk/nextjs";

export const useBankConnection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isManualDialogOpen, setIsManualDialogOpen] = useState(false);
  const [authorizationCode, setAuthorizationCode] = useState("");
  const { getToken } = useAuth();

  // Handle messages from Visa iframe
  useEffect(() => {
    const receiveMessage = (event: MessageEvent) => {
      // Validate the origin of the message
      if (event.origin !== "https://link.us.tink.com") {
        return;
      }

      // Parse the message data
      const { type, data, error } = JSON.parse(event.data);

      // Handle different message types
      if (type === "code") {
        // This is the authorization code that should be exchanged for an access token
        const code = data;
        console.log(`Visa Link returned with authorization code: ${code}`);
        setAuthorizationCode(code); // Update the authorization code in state
      } else if (type === "error") {
        // Handle error response from Visa Link
        console.error(`Visa Link returned with error status: ${error.status} and error message: ${error.message}.`);
      } else if (type === "credentials") {
        // Handle credentials error response from Visa Link
        const credentialsId = data;
        console.error(`Authentication failed with credentials identifier: ${credentialsId} with error status: ${error.status} and error message: ${error.message}.`);
      } else if (type === "status") {
        // Observe Visa Link loading state (optional)
        const { loading } = data;
        console.log(`Visa Link has ${loading ? "shown" : "hidden"} the loading overlay.`);
      } else {
        // Ignore other message types
        console.log("Received unknown message type:", type);
      }
    };

    // Add the event listener
    window.addEventListener("message", receiveMessage, false);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("message", receiveMessage);
    };
  }, []);

  const handleBankConnect = async () => {
    const token = await getToken();
    const userMarket = "US";
    const userLocale = "en_US";
    try {
      const response = await fetch("http://44.192.120.34:1337/api/tink/connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ locale: userLocale, market: userMarket }),
      });
      const data = await response.json();
      setAuthorizationCode(data.code);
      setIsDialogOpen(true);
    } catch (error) {
      console.error("Error initiating bank connection:", error);
    }
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const openManualDialog = () => {
    setIsManualDialogOpen(true);
  };

  const closeManualDialog = () => {
    setIsManualDialogOpen(false);
  };

  return {
    isDialogOpen,
    closeDialog,
    handleBankConnect,
    authorizationCode,
    isManualDialogOpen,
    openManualDialog,
    closeManualDialog,
  };
};
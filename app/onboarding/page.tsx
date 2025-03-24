'use client';
import StepperForm from "../../components/StepperForm/StepperForm";
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';


export default function OnboardingPage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get('code');
    const credentialsId = searchParams.get('credentialsId') || searchParams.get('credentials_id');


    if (code && credentialsId) {
      // Send message to parent window (the one that rendered the iframe)
    
      window.parent.postMessage(
        {
          source: 'visa-sdk',
          code,
          credentialsId,
        },
        '*'
      );
    }
  }, [searchParams]);
  return (
    <div>
      <StepperForm />
    </div>
  );
}
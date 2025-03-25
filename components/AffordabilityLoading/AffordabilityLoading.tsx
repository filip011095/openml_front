import Image from "next/image";

export default function AffordabilityLoading() {
  return (
    <div className="h-[100%] w-full flex flex-col items-center justify-start bg-white px-4">
      <div className="w-[40%] text-center  flex flex-col items-center justify-center">
        <div className="mb-0">
          <Image
            src="/affordability_loading.png" // Make sure the image file is in your /public folder
            alt="Affordability Illustration"
            width={500}
            height={500}
            className="mx-auto"
          />
        </div>

        <h1 className="text-6xl  font-bold text-[#2A2A33] mb-8">
          Calculating Your Affordability
        </h1>
        <div className="w-2/3 text-[24px] text-[#2A2A33] mb-15">
          [Name], we’re analyzing your affordability based on your linked <br />
          accounts. This will only take a moment
        </div>

        <div className="w-full bg-[#D9D9D9] rounded-full h-4 mb-2">
          <div className="flex flex-col ">
            <div className="bg-[#2286EA] h-4 rounded-full w-[24%] ">
              <p className="text-[24px] text-[#2286EA] flex justify-end pt-5 mr-[-24px]">
                24%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { TypographyH2 } from "@/app/components/TypographyH2";
import { TypographyP } from "@/app/components/TypographyP";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid rounded-xl border-4 p-8 shadow-[0_10px_20px_rgba(0,0,0,0.1)] bg-gradient-to-br from-white to-blue-50 grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="flex flex-col justify-center">
          <TypographyH2 className="text-3xl font-bold text-center tracking-wide mb-6">
            ConsumeWise
          </TypographyH2>
          <TypographyP className="text-xl max-w-full mx-auto text-justify text-gray-700 leading-relaxed">
            Your AI-powered shopping companion. Scan products to instantly
            reveal their health, environmental, and social impacts. Make
            informed choices tailored to your personal values and wellbeing
            goals. Shop smarter, live better.
          </TypographyP>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <SignIn
            signUpUrl="/sign-up"
            appearance={{
              elements: {
                cardBox: "h-full",
                card: "h-full flex flex-col",
                headerTitle: "text-2xl font-bold mb-4",
                headerSubtitle: "mb-4 text-gray-600",
                socialButtonsBlockButton: "mb-2 hover:bg-blue-50 transition-colors",
                dividerLine: "my-4 border-blue-200",
                formFieldInput: "mb-2 border-blue-200 focus:border-blue-500 focus:ring-blue-500",
                formButtonPrimary: "mt-4 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out",
                formFieldRow: "mb-2",
                main: "flex flex-col justify-between flex-grow",
                body: "flex flex-col flex-grow",
                form: "flex flex-col flex-grow justify-between",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

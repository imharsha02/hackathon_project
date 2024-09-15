import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { TypographyH2 } from "./TypographyH2";
const Header = () => {
  return (
    <div className="flex justify-between flex-row-reverse mx-1 p-5">
        {/* ACCOUNT SETTINGS */}
      <>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton appearance={{
              elements: {
                userButtonAvatarBox: 'w-10 h-10',
                userButtonOuterBox: 'flex items-center justify-center',
              },
            }}/>
        </SignedIn>
      </>
      <>
      <TypographyH2 className="pt-2 max-w-full mx-auto tracking-wide border-none">ConsumeWise</TypographyH2>
      </>
    </div>
  );
};

export default Header;

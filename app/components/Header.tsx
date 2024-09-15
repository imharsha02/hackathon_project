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
      <div className="p-4 text-center bg-white">
      <TypographyH2 className="text-center tracking-wide border-none py-3 m-0">ConsumeWise</TypographyH2>
      </div>
    </div>
  );
};

export default Header;

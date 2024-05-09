import Link from "next/link";
import Socials from "../components/Socials";
const Header = () => {
  return <header className="absolute xl:z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
        <Link href={"/"}>
          <div className="gap-2 flex justify-between items-center text-3xl text-white xl:text-4xl">
            <div className="font-extrabold ">Rom&apos;s</div>
            <div>Dev&apos;</div>
            <div className="text-red-600">.</div>
            </div>
        </Link>
        <Socials/>
      </div>
    </div>
  </header>;
};

export default Header;

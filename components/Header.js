import Link from "next/link";
import Socials from "../components/Socials";
const Header = () => {
  return <header className="bg-white/10 backdrop-blur-sm absolute z-[60] w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center xl:gap-y-6 gap-y-2 py-2 xl:py-8">
        <Link href={"/"}>
          <div className="gap-2 flex justify-between items-center text-3xl text-white xl:text-4xl">
            <div className="font-extrabold text-2xl xl:text-3xl ">Rom&apos;s</div>
            <div className="text-2xl xl:text-3xl">Dev&apos;</div>
            <div className="text-red-600">.</div>
            </div>
        </Link>
        <Socials/>
      </div>
    </div>
  </header>;
};

export default Header;

import Link from "next/link";
import { RiYoutubeLine, RiInstagramLine, RiFacebookLine } from "react-icons/ri";

const Socials = () => {
  return (
  <div className="flex items-center gap-x-5 text-lg">
    <a href="" className="hover:text-accent transition-all duration-300">
      <RiYoutubeLine />
    </a>
    <a href="https://www.instagram.com/dev_roms?igsh=MTdmcGpiNzBsN2VneA%3D%3D&utm_source=qr" className="hover:text-accent  transition-all duration-300">
      <RiInstagramLine />
    </a>
    <Link href={''} className="hover:text-accent  transition-all duration-300">
      <RiFacebookLine />
    </Link>
    </div>
  )
};

export default Socials;

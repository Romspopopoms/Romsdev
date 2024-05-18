import { RiYoutubeLine, RiInstagramLine, RiFacebookLine } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg z-20">
      <a href="https://www.youtube.com" className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </a>
      <a href="https://www.instagram.com/dev_roms?igsh=MTdmcGpiNzBsN2VneA%3D%3D&utm_source=qr" className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </a>
      <a href="https://www.facebook.com/profile.php?id=61559687947882" className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </a>
    </div>
  );
};

export default Socials;

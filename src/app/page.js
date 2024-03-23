import Image from "next/image";
import HomeImage from "../images/home1.webp";
import HomeImageMobile from "../images/home1mobile.webp";

export default function Home() {
  return (
    <>
      <Image width={1920} height={1080} src={HomeImage} alt="HomeImage" className="object-cover w-full h-full lg:block hidden"/>
      {/* Mobile Image */}
      <Image width={375} height={667} src={HomeImageMobile} alt="HomeImage" className="object-cover w-full h-full lg:hidden block "/>

    </>
  );
}

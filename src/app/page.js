import Image from "next/image";
import HomeImage from "../images/home1.webp";
import HomeImage2 from "../images/home2.webp";
import HomeImage3 from "../images/home3.webp";
import HomeImage4 from "../images/home4.webp";
import HomeImage5 from "../images/home5.webp";
import HomeImageMobile from "../images/home1mobile.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function FirstCatalog() {
  return (
    <div className="grid min-h-full">
      <div className="relative flex">
        <Image
          width={1920}
          height={1080}
          src={HomeImage2}
          alt="HomeImage"
          className="absolute inset-0 h-full w-full object-cover object-center lg:block hidden"
        />
        <Image
          width={375}
          height={667}
          src={HomeImageMobile}
          alt="HomeImage"
          className="absolute inset-0 h-full w-full object-cover object-center lg:hidden block "
        />
        <div className="relative flex w-full flex-col items-center justify-end p-8 mb-12 sm:p-12">
          <a
            href="#"
            className="mt-4 rounded-md bg-primary px-4 py-2.5 text-sm hover:bg-gray-50 font-semibold transition-colors"
          >
            SHOP MARTINEE
          </a>
        </div>
      </div>
    </div>
  );
}

function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full h-screen"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3"
          >
            <Image
              width={1080}
              height={1080}
              src={HomeImage5}
              alt="HomeImage"
              className="object-cover w-full h-screen"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

function Catalog() {
  return (
    <div className="grid min-h-full grid-cols-1 lg:grid-cols-2">
      <div className="relative flex">
        <Image
          width={960}
          height={1080}
          src={HomeImage3}
          alt="Catalog"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="relative flex w-full flex-col items-center justify-end p-8 mb-12 sm:p-12">
          <a
            href="#"
            className="mt-4 rounded-md bg-primary px-4 py-2.5 text-sm hover:bg-gray-50 font-semibold transition-colors"
          >
            SHOP MARTINEE
          </a>
        </div>
      </div>
      <div className="relative lg:flex hidden">
        <Image
          width={960}
          height={1080}
          src={HomeImage4}
          alt="Catalog"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="relative flex w-full flex-col items-center justify-end p-8 mb-12 sm:p-12">
          <a
            href="#"
            className="mt-4 rounded-md bg-primary px-4 py-2.5 text-sm hover:bg-gray-50 font-semibold transition-colors"
          >
            SHOP MARTINEE
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <FirstCatalog />
      {/* <Image
        width={1920}
        height={1080}
        src={HomeImage}
        alt="HomeImage"
        className="object-cover w-full h-full lg:block hidden"
      />
      <Image
        width={375}
        height={667}
        src={HomeImageMobile}
        alt="HomeImage"
        className="object-cover w-full h-full lg:hidden block "
      /> */}
      <CarouselSize />
      <Catalog />
    </>
  );
}

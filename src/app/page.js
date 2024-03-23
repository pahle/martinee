import Image from "next/image";
import HomeImage from "../images/home1.webp";
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
          src={HomeImage}
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
          <h2 className="text-lg font-medium text-white text-opacity-75">
            Self-Improvement
          </h2>
          <p className="mt-1 text-2xl font-medium text-white">
            Journals and note-taking
          </p>
          <a
            href="#"
            className="mt-4 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
          >
            Shop now
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
              src={HomeImageMobile}
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
          src={HomeImageMobile}
          alt="Catalog"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="relative flex w-full flex-col items-center justify-end p-8 mb-12 sm:p-12">
          <h2 className="text-lg font-medium text-white text-opacity-75">
            Self-Improvement
          </h2>
          <p className="mt-1 text-2xl font-medium text-white">
            Journals and note-taking
          </p>
          <a
            href="#"
            className="mt-4 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
          >
            Shop now
          </a>
        </div>
      </div>
      <div className="relative lg:flex hidden">
        <Image
          width={960}
          height={1080}
          src={HomeImageMobile}
          alt="Catalog"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="relative flex w-full flex-col items-center justify-end p-8 mb-12 sm:p-12">
          <h2 className="text-lg font-medium text-white text-opacity-75">
            Self-Improvement
          </h2>
          <p className="mt-1 text-2xl font-medium text-white">
            Journals and note-taking
          </p>
          <a
            href="#"
            className="mt-4 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
          >
            Shop now
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

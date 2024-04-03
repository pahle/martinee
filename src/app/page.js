import Image from "next/image";
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
          src="/catalog9.webp"
          alt="HomeImage"
          className="absolute inset-0 hidden h-full w-full object-cover object-center lg:block"
        />
        <Image
          width={375}
          height={667}
          src="/catalog7.webp"
          alt="HomeImage"
          className="absolute inset-0 block h-full w-full object-cover object-center lg:hidden "
        />
        <div className="relative mb-12 flex w-full flex-col items-center justify-end p-8 sm:p-12">
          <a
            href="https://shp.ee/ygobijj"
            target="_blank"
            className="mt-4 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-gray-50"
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
      className="h-dvh w-full"
    >
      <CarouselContent>
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Image
              width={1080}
              height={1080}
              src={`/catalog${index + 1}.webp`}
              alt="HomeImage"
              className="h-dvh w-full object-cover"
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
          src="/catalog8.webp"
          alt="Catalog"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="relative mb-12 flex w-full flex-col items-center justify-end p-8 sm:p-12">
          <a
            href="https://shp.ee/ygobijj"
            target="_blank"
            className="mt-4 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-gray-50"
          >
            SHOP MARTINEE
          </a>
        </div>
      </div>
      <div className="relative hidden lg:flex">
        <Image
          width={960}
          height={1080}
          src="/catalog6.webp"
          alt="Catalog"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="relative mb-12 flex w-full flex-col items-center justify-end p-8 sm:p-12">
          <a
            href="https://shp.ee/ygobijj"
            target="_blank"
            className="mt-4 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-gray-50"
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
      <CarouselSize />
      <Catalog />
    </>
  );
}

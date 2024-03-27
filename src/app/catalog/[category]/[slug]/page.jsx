import Image from "next/image";
import listCatalog from "@/data/catalog.json";
import CatalogContainer from "@/components/CatalogContainer";
import currencyFormat from "@/lib/CurrencyFormatter";

const getData = (category, slug) => {
  return listCatalog
    .find((item) => item.category === category)
    .catalog.find((item) => item.slug === slug);
};

export default function CatalogDetail(params) {
  const data = getData(
    params.params.category,
    params.params.slug
  );

  // const data = getData(params.params.slug)
  return (
    <CatalogContainer>
      <div className="flex justify-center lg:flex-row flex-col items-center gap-8">
        <Image
          src={data.image}
          alt={data.name}
          className=" w-[750px] aspect-square"
          width={1000}
          height={1000}
        />
        <div className="text-center">
          <h1 className="text-2xl font-extrabold text-primary uppercase">
            {data.name}
          </h1>
          <p className="mt-2 text-xl font-extrabold">
            {currencyFormat(data.price)}
          </p>
        </div>
      </div>
    </CatalogContainer>
  );
}

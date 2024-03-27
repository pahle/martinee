import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import currencyFormat from "@/lib/CurrencyFormatter";
import listCatalog from "@/data/catalog.json";

const getData = (category) => {
  return listCatalog.find(
    (item) => item.category === category
  ).catalog;
};

export default function CatalogCategory(params) {
  const category = params.params.category;

  const data = getData(category);

  return (
    <Container title="BATCH-1">
      <div
        className="grid lg:grid-cols-3 grid-cols-2"
      >
        {data.map((item, index) => (
          <Link
            href={`/catalog/${category}/${item.slug}`}
            key={index}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={500}
              height={500}
            />
            <div className="text-center">
              <p className="font-semibold text-sm uppercase pb-1">
                {item.name}
              </p>
              <p className="font-medium text-xs">
                {currencyFormat(item.price)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}

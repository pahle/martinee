import Image from "next/image";
import Link from "next/link";
import listCatalog from "@/data/catalog.json";
import Container from "@/components/Container";
import currencyFormat from "@/lib/CurrencyFormatter";

export default function Catalog() {
  console.log(listCatalog.map((item) => item.category));
  return (
    <Container title="SHOP ALL">
      {listCatalog.map((category, index) => (
        <div key={index} className="grid lg:grid-cols-3 grid-cols-2">
          {category.catalog.map((item, index) => (
            <Link
              href={`/catalog/${category.category}/${item.slug}`}
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
      ))}
    </Container>
  );
}

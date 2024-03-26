import Image from "next/image";
import Link from "next/link";
import listCatalog from "@/data/catalog.json";

export default function Catalog() {
  console.log(listCatalog.map((item) => item.category));
  return (
    <div className="mt-20 flex justify-center">
      <div className="max-w-5xl w-full">
        <h1 className="text-center text-2xl font-extrabold mb-8">
          SHOP ALL
        </h1>
        <div className="w-full">
          {listCatalog.map((category, index) => (
            <div key={index} className="grid grid-cols-3">
              {category.catalog.map((item, index) => (
                <Link href={`/catalog/${category.category}/${item.slug}`} key={index}>
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
                      ${item.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

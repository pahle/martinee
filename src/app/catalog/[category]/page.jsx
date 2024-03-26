import Link from "next/link";
import listCatalog from "@/data/catalog.json";

const getData = (category) => {
// if empty
  if (!category) {
    return listCatalog
  }

  return listCatalog[`${category}`]
}

export default function CatalogCategory(params) {

  const category = params.params.category

  const data = getData(category)

  return (
   <div className="bg-red-500 w-full">
    
   </div>
  );
}

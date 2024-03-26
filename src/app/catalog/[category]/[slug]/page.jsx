import React from "react";
import listCatalog from "@/data/catalog.json";

const getData = (category, slug) => {
  return listCatalog
    .find(
      (item) => item.category === category
    )
    .catalog.find(
      (item) => item.slug === slug
    );
};

export default function CatalogDetail(params) {
  const data = getData(params.params.category, params.params.slug);

  // const data = getData(params.params.slug)
  return (
    <div className="mt-24">{data.name}</div>
  );
}

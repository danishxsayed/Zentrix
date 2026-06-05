import type { Metadata } from "next";
import ProductsClient from "./products-client";

export const metadata: Metadata = {
  title: "Electronic Component Catalog",
  description: "Browse our extensive catalog of electronic components. Sourcing active, passive, and electromechanical components, integrated circuits, semiconductors, sensors, and dev boards.",
};

export default function Products() {
  return <ProductsClient />;
}

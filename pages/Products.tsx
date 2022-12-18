import { For, Show, Suspense } from "solid-js";

import { Card } from "@components/products/Card";
import { CardLayout } from "@components/layout/CardLayout";
import { products } from "../lib/store";
import { tempProducts } from "../lib/constants";

export interface IProduct {
  id: number;
  title: string;
  price: number | string;
  category: string;
  description: string;
  image: string;
}

const Products = () => {
  return (
    <div class="space-y-8">
      <div class="flex justify-between items-center">
        <h4 class=" text-2xl font-semibold">Products</h4>
        <Show when={tempProducts} fallback={<FallbackLoader />}>
          <p>{tempProducts.length} results</p>
        </Show>
      </div>
      <div>
        <CardLayout>
          <Show when={products.state === "ready"}>
            <For each={products()}>{(product) => <Card {...product} />}</For>
          </Show>
        </CardLayout>
      </div>
    </div>
  );
};

const FallbackLoader = () => {
  const arr = Array.from({ length: 10 }, (_, i) => i);
  return (
    <CardLayout>
      <For each={arr}>
        {(_) => (
          <div class="flex justify-center ">
            <div class="rounded max-w-[300px] w-full h-[408px] mx-auto space-y-4 bg-neutral-800 animate-pulse" />
          </div>
        )}
      </For>
    </CardLayout>
  );
};

export default Products;

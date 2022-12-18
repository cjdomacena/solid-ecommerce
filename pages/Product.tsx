import { tempProducts } from "../lib/constants";
import { createEffect, createResource, For, Show, useContext } from "solid-js";
import { addToCart } from "../lib/store";
import { formatCurrency } from "../lib/utils";
import { useParams } from "@solidjs/router";
import { fetchSingleProduct } from "../lib/api";
import { IProduct } from "./Products";

const Product = () => {
  const params = useParams();

  const [data] = createResource(() => params.id, fetchSingleProduct);
  const capitalizedFirstLetter = (text: string) => {
    const firstLetter = text.charAt(0).toUpperCase();

    return firstLetter + text.slice(1);
  };

  return (
    <div class="text-neutral-800 h-full">
      <Show
        when={data.state === "ready"}
        fallback={<p class="px-8">Loading...</p>}
      >
        <div class="justify-evenly gap-12 flex  flex-wrap items-start">
          <div class="max-w-[350px]">
            <img src={data().image} width={350} height={350} class="rounded" />
          </div>
          <div class="flex-grow h-full max-w-2xl space-y-8">
            <div class="h-full space-y-4">
              <div>
                <p class="capitalize">{data().category}</p>
                <h1 class="text-7xl font-black leading-normal -tracking-wider  max-w-2xl">
                  {data().title}
                </h1>
                <p class="text-2xl font-bold ">
                  {formatCurrency(data().price)}
                </p>
              </div>
              <button
                class="px-4 py-2 bg-blue-700 rounded text-neutral-100"
                onClick={() => addToCart(data())}
              >
                Add to Cart
              </button>
            </div>

            <div>
              <details open>
                <summary class="text-lg font-bold bg-neutral-100 p-2 rouned">
                  Description
                </summary>
                <div class="p-4 text-neutral-600 bg-neutral-100 rounded-b">
                  <p>{capitalizedFirstLetter(data().description)}</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </Show>
    </div>
  );
};

export default Product;

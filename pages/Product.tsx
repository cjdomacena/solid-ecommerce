import { useRouteData } from "@solidjs/router";
import { tempProducts } from "../lib/constants";
import { Show } from "solid-js";
import { ProductDetails } from "src/App";

const Product = () => {
  const data = () => tempProducts[2];
  return (
    <div>
      <Show when={data()} fallback={<p class="px-8">Loading...</p>}>
        <div class="flex justify-between items-center px-8">{data().title}</div>
      </Show>
    </div>
  );
};

export default Product;

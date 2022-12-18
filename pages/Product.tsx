import { tempProducts } from "../lib/constants";
import { Show, useContext } from "solid-js";
import { addToCart } from "../lib/store";

const Product = () => {
  const data = () => tempProducts[2];
  const product = { ...data(), quantity: 1 };

  return (
    <div>
      <Show when={data()} fallback={<p class="px-8">Loading...</p>}>
        <div class="flex justify-between items-center px-8">{data().title}</div>
        <button onClick={() => addToCart(product)}>Click Me</button>
      </Show>
    </div>
  );
};

export default Product;

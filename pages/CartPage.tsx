import { formatCurrency } from "../lib/utils";
import { cart, getCartTotalPrice } from "../lib/store";
import { CartCard } from "@components/products/CartCard";
import { For, Show } from "solid-js";
import { IProduct } from "./Products";

const CartPage = () => {
  return (
    <div>
      <h1 class="text-4xl font-bold">My Cart</h1>
      <div class="my-8 space-y-4">
        <Show when={cart.length > 0}>
          <For each={cart}>
            {(cartItems: IProduct & { quantity: number }) => (
              <CartCard products={cartItems} />
            )}
          </For>
        </Show>
      </div>
      <p>Total: {formatCurrency(getCartTotalPrice())}</p>
    </div>
  );
};

export default CartPage;

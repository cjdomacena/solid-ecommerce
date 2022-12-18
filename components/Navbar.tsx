import { A } from "@solidjs/router";
import { For, Show } from "solid-js";
import { AiOutlineShoppingCart } from "solid-icons/ai";
import { getCartCount } from "../lib/store";

const links = [{ href: "/products", value: "Products" }];

export const Navbar = () => {
  return (
    <nav class="w-full h-auto p-4 border-b border-b-neutral-200 flex justify-between">
      <div>
        <A href="/">SolidStore</A>
      </div>
      <ul class="flex items-center gap-4">
        <For each={links}>
          {(link, index) => (
            <li>
              <A
                href={link.href}
                activeClass="font-semibold"
                inactiveClass="font-normal"
              >
                {link.value}
              </A>
            </li>
          )}
        </For>
        <li>
          <A href="/cart" class="flex gap-2 items-center">
            <AiOutlineShoppingCart />
            <Show when={getCartCount() > 0}>
              <p>{getCartCount()}</p>
            </Show>
          </A>
        </li>
      </ul>
    </nav>
  );
};

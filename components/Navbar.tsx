import { A } from "@solidjs/router";
import { For } from "solid-js";

const links = [{ href: "/products", value: "Products" }];

export const Navbar = () => {
  return (
    <nav class="w-full h-auto p-4 border-b border-b-neutral-800 flex justify-between">
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
      </ul>
    </nav>
  );
};

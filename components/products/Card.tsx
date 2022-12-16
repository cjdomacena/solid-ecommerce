import { IProduct } from "@pages/Products";
import { A } from "@solidjs/router";
import { Component } from "solid-js";

export const Card: Component<IProduct> = ({
  id,
  title,
  price,
  description,
  image,
  category,
}) => {
  return (
    <div class="flex justify-center ">
      <div class="rounded max-w-[300px] w-full h-fit mx-auto space-y-4 bg-neutral-800 p-2 shadow">
        <img
          src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=763&q=80"
          class="max-w-[300px] w-full h-[300px] rounded"
        />
        <div class="space-y-3 p-2">
          <div>
            <h3 class="font-medium text-2xl leading-relaxed">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(Number(price))}
            </h3>
            <A
              href={`/products/${id}`}
              class="text-lg  line-clamp-1"
              title={title}
            >
              {title}
            </A>
          </div>
          <p class="line-clamp-3 text-neutral-400">{description}</p>

          <p class="capitalize text-xs text-neutral-500 font-medium">
            {category}
          </p>
        </div>
      </div>
    </div>
  );
};

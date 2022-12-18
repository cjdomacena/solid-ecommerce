import { IProduct } from "@pages/Products";
import { A } from "@solidjs/router";
import { formatCurrency } from "../../lib/utils";
import { AiOutlinePlus, AiOutlinePlusCircle } from "solid-icons/ai";
import { Component } from "solid-js";
import { addToCart } from "../../lib/store";

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
      <div class="rounded max-w-[300px] w-full h-fit mx-auto space-y-4 bg-neutral-100 p-2 shadow relative hover:shadow-lg transition-shadow text-neutral-700">
        <A href={`/products/${id}`}>
          <img
            src={image}
            class="max-w-[300px] w-full h-[300px] rounded object-fit"
          />
        </A>
        <div class="space-y-3 p-2">
          <div>
            <h3 class="font-medium text-2xl leading-relaxed">
              {formatCurrency(price)}
            </h3>
            <A
              href={`/products/${id}`}
              class="text-lg  line-clamp-1 font-semibold"
              title={title}
            >
              {title}
            </A>
          </div>

          <p class="capitalize text-xs text-neutral-500 font-medium">
            {category}
          </p>
        </div>
        <div class="absolute -bottom-4 left-0 flex justify-center w-full">
          <button
            class="bg-blue-500 p-2 rounded-full text-white  shadow ring"
            onClick={() =>
              addToCart({
                id,
                title,
                price,
                description,
                image,
                category,
                quantity: 1,
              })
            }
          >
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    </div>
  );
};

import { IProduct } from "@pages/Products";
import { formatCurrency } from "../../lib/utils";
import { addToCart, reduceQuantity, removeFromCart } from "../../lib/store";

interface CartCardProps {
  products: IProduct & { quantity: number };
}

export const CartCard = ({ products }: CartCardProps) => {
  return (
    <div class="w-full p-4 bg-neutral-100 shadow space-x-2 flex max-w-xl">
      <div>
        <img src={products.image} class="w-24 h-24 object-contain" />
      </div>
      <div class="space-y-1">
        <h4 class="text-xl font-bold">{products.title}</h4>
        <p>{formatCurrency(products.price)}</p>
        <div class="flex gap-4 items-center">
          <button
            type="button"
            class="p-2 bg-neutral-200 rounded-full"
            onClick={() => reduceQuantity(products.id)}
          >
            -
          </button>
          <p>Qty {products.quantity}</p>
          <button
            type="button"
            class="p-2 bg-neutral-200 rounded-full"
            onClick={() => addToCart({ ...products })}
          >
            +
          </button>
          <button onClick={() => removeFromCart(products.id)}>Remove</button>
        </div>
      </div>
    </div>
  );
};

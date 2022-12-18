import { IProduct } from "@pages/Products";
import { createResource, createSignal } from "solid-js";
import { createStore, produce } from "solid-js/store";
import { fetchProducts } from "./api";

const getLocalStorageCart = () => {
  const cartItems = localStorage.getItem("cart");
  if (cartItems) {
    return JSON.parse(cartItems);
  } else {
    localStorage.setItem("cart", JSON.stringify([]));
    return [];
  }
};

export const [products] = createResource<IProduct[]>(fetchProducts, {
  initialValue: null,
});
export const [search, setSearch] = createSignal<string>("");
export const [cart, setCart] = createStore(getLocalStorageCart());

export const addToCart = (product: IProduct & { quantity: number }) => {
  const tempCart = JSON.parse(JSON.stringify([...cart]));
  const hasDuplicate = tempCart.findIndex(
    (cartItem) => cartItem.id === product.id
  );
  console.log(hasDuplicate);
  if (hasDuplicate > -1) {
    tempCart[hasDuplicate].quantity += 1;
  } else {
    tempCart.push(product);
  }
  setCart([...tempCart]);
  localStorage.setItem("cart", JSON.stringify([...tempCart]));
};

export const getCartCount = () => {
  return cart.reduce(
    (acc: number, cartItem: IProduct & { quantity: number }) =>
      acc + cartItem.quantity,
    0
  );
};

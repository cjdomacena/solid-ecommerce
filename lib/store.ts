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

export const removeFromCart = (productId: string | number) => {
  const tempCart = JSON.parse(JSON.stringify([...cart]));
  const productIndexToRemove = tempCart.findIndex(
    (cartItem) => cartItem.id === productId
  );
  if (
    productIndexToRemove > -1 &&
    productIndexToRemove === tempCart.length - 1
  ) {
    tempCart.pop();
  } else {
    const productToRemove = tempCart[productIndexToRemove];
    tempCart[productIndexToRemove] = tempCart[tempCart.length - 1];
    tempCart[tempCart.length - 1] = productToRemove;
    tempCart.pop();
  }
  setCart([...tempCart]);
  localStorage.setItem("cart", JSON.stringify([...tempCart]));
};

export const reduceQuantity = (productId: string | number) => {
  const tempCart = JSON.parse(JSON.stringify([...cart]));
  const productIndexToRemove = tempCart.findIndex(
    (cartItem) => cartItem.id === productId
  );
  if (productIndexToRemove > -1) {
    if (tempCart[productIndexToRemove].quantity === 1) {
      removeFromCart(productId);
      return;
    } else {
      tempCart[productIndexToRemove].quantity -= 1;
    }
  }
  setCart([...tempCart]);
  localStorage.setItem("cart", JSON.stringify([...tempCart]));
};

export const getCartTotalPrice = () => {
  let totalPrice = 0;
  cart.map((cartItem) => {
    totalPrice += cartItem.quantity * Number(cartItem.price);
  });
  return totalPrice;
};

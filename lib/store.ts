import { IProduct } from "@pages/Products";
import { createResource, createSignal } from "solid-js";
import { fetchProducts } from "./api";

export const [products] = createResource<IProduct[]>(fetchProducts, {
  initialValue: null,
});
export const [cart, setCart] = createSignal<IProduct | null>(null);
export const [search, setSearch] = createSignal<string>("");

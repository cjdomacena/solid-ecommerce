import { PRODUCT_API } from "../constants";

export const fetchProducts = async () => {
  const req = await fetch(`${PRODUCT_API}/products`);
  const res = await req.json();
  return res;
};

export const fetchSingleProduct = async (id: string | number) => {
  const req = await fetch(`${PRODUCT_API}/products/${id}`);
  const res = await req.json();
  return res;
};

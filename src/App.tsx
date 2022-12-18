import { Container } from "@components/layout/Container";
import Home from "@pages/Home";

import { Route, RouteProps, Routes } from "@solidjs/router";
import {
  Component,
  createResource,
  lazy,
  Resource,
  ResourceReturn,
} from "solid-js";
import { Navbar } from "../components/Navbar";
import Products, { IProduct } from "@pages/Products";
import { fetchSingleProduct } from "../lib/api";
import CartPage from "@pages/CartPage";

const Product = lazy(() => import("@pages/Product"));

export const ProductDetails = ({ params }) => {
  const [product]: ResourceReturn<IProduct> = createResource(
    () => params.id,
    fetchSingleProduct
  );
  return product;
};

const App: Component = () => {
  return (
    <div class="min-h-screen text-neutral-900">
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" component={Products} />
          <Route path="/products">
            <Route path="/" component={Products} />
            <Route path="/:id" component={Product} data={ProductDetails} />
          </Route>
          <Route path="/cart" component={CartPage}></Route>
        </Routes>
      </Container>
    </div>
  );
};

export default App;


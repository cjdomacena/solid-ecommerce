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
    <div class="min-h-screen bg-neutral-900 text-neutral-50 ">
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/products">
            <Route path="/" component={Products} />
            <Route path="/:id" component={Product} data={ProductDetails} />
          </Route>
        </Routes>
      </Container>
    </div>
  );
};

export default App;


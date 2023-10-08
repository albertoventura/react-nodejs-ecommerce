import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../../pages/home/Home";
import Product from "../../pages/product/product";
import Cart from "../../pages/cart/Cart";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/product",
                element: <Product />
            },
            {
                path: "/cart",
                element: <Cart />
            },
        ],
    }
]);

export { router };
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../../pages/home/Home";
import Product from "../../pages/product/product";
import ProductEdit from "../../pages/product/components/ProductEdit";
import Cart from "../../pages/cart/Cart";
import Sign from "../../pages/sign/Sign";

const router = createBrowserRouter([
    {
        path: "/sign",
        element: <Sign />
    },
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/product/:id',
                element: <Product />,
            },
            {
              path: '/product/edit',
              element: <ProductEdit />,
            },
            {
                path: "/cart",
                element: <Cart />
            },
        ],
        
    },
    
]);

export { router };
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../../pages/home/Home";
import ProductView from "../../pages/product/view/ProductView";
import ProductEdit from "../../pages/product/edit/ProductEdit";
import Cart from "../../pages/cart/Cart";
import Sign from "../../pages/sign/Sign";
import Product from "../../pages/product/Product";

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
                path: "/product",
                element: <Product />,
                children: [
                    {
                        path: '/:id',
                        element: <ProductView />,
                    },
                    {
                      path: '/edit',
                      element: <ProductEdit />,
                    },
                ]
            },
            
            {
                path: "/cart",
                element: <Cart />
            },
        ],
        
    },
    
]);

export { router };
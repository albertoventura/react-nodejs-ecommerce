
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import ProductView from "../../pages/product/components/ProductView";
import ProductEdit from "../../pages/product/components/ProductEdit";
import Cart from "../../pages/cart/Cart";
import Product from "../../pages/product/Product";
import Header from "../components/header/Header";
import Paths from "../constants/Path";
import ErrorPage from "../../pages/error/ErrorPage";

export default function Routers(){
    return (
        <BrowserRouter>
            <Header></Header>
            <div className="mt-10">
                <Routes>
                    <Route path={Paths.home} element={ <Home />}/>
                    <Route path={Paths.cart} element={ <Cart />}/>
                    <Route path={Paths.product} element={ <Product />}>
                        <Route index path={Paths.view} element={ <ProductView/> }></Route>
                        <Route path={Paths.edit} element={<ProductEdit/>}/>
                    </Route>
                    <Route path={"*"} element={<ErrorPage/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>        
    );
}
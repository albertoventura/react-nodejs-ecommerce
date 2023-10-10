
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../../pages/home/Home";
import ProductView from "../../pages/product/view/ProductView";
import ProductEdit from "../../pages/product/edit/ProductEdit";
import Cart from "../../pages/cart/Cart";
import Sign from "../../pages/sign/Sign";
import Product from "../../pages/product/Product";
import Header from "../components/header/Header";

export default function Routess(){
    return (
        <BrowserRouter>
            <Header></Header>
            <div style={{marginTop: "30px"}}>
                <Routes>
                    <Route exact path={"/"} element={ <Home />}/>
                    <Route exact path={"/cart"} element={ <Cart />}/>
                    <Route path={"/product"} element={ <Product />}>

                        {/* <Route index element={<ProductView/>}></Route>
                        <Route path={"create"}></Route>
                        <Route path={"edit"} element={<MarketEdit/>}/>
                        <Route path={"view"}></Route> */}
                        <Route index path={":id"} element={ <ProductView/> }></Route>
                        <Route path={"edit"} element={<ProductEdit/>}/>
                    </Route>

                </Routes>

            </div>
        </BrowserRouter>        
    );
}
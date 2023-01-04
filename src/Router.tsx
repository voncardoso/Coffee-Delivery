import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { ConfirmOrder } from "./Page/ConfirmOrder";
import { Home } from "./Page/Home";
import { ProductSold } from "./Page/productSold";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />}/>
                <Route path="/confirmarpedido" element={<ConfirmOrder />}/>
                <Route path="/produtovendido" element={<ProductSold />}/>
            </Route>
        </Routes>
    )
}
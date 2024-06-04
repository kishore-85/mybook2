
import Customer from "./container/Customer";
import Product from "./container/Product";
import Billing from "./container/Billing";
import Addcustomer from "./container/Addcustomer";
import { Routes,Route } from "react-router-dom";
import Invoice from "./Invoice";
import AddProduct from "./container/Addproduct";
function Container(){
    return(
        <div className="Container">
        <p>Container component</p>

        {/* <Routes>
        <Route path='/Customer' >
        <Route  index element={<Customer></Customer>}></Route> 
        <Route path=':customid' element={<Addcustomer></Addcustomer>} ></Route> 
      </Route> 
      <Route path='/Billing' >
        <Route index element={<Billing></Billing>}></Route>
        <Route path=":invoice" element={<Invoice></Invoice>}></Route>
      </Route>   
      <Route path='/Product' >
        <Route  index element={<Product></Product>}></Route> 
        <Route path=':prodid' element={<AddProduct></AddProduct>} ></Route> 
      </Route>  
        </Routes> */}
       

         
        </div>
    )
}
export default Container;
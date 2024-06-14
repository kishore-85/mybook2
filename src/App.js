import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Sidenav from './Sidenav';
import Container from './Container';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Product from './container/Product';
import Customer from './container/Customer';
import Billing from './container/Billing';
import Addcustomer from './container/Addcustomer';
import AddProduct from './container/Addproduct';
import Bill from './Invoice.js';
import Invoice from './Invoice.js';




function App() {
  return (
    <div className="App">

      <Header></Header>
      <Sidenav></Sidenav>
      <Footer></Footer>
      
      <Routes>
      
      <Route path='/' element={<Container></Container>}> </Route>

      {/* <Route path="/Customer" element={<Customer></Customer>}></Route> */}
      {/* <Route path="/Product" element={<Product />} /> */}
      
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
      </Routes>

      {/* <IconButtonSizes></IconButtonSizes> */}
      
    </div>
  );
}

export default App;

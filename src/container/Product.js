import { Link, NavLink } from "react-router-dom";


function Product(){
    return(
        <div>
        <p>Product Components</p>
        <Link to={':prodid'}>Addproduct</Link>
        </div>
    )
}

export default Product;
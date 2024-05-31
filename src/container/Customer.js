import { Link } from "react-router-dom";

function Customer(){
    return(
        <div>
        <p>Customer Components </p>
            <ul>
                <li>HI ravi!</li>
            </ul>
           <Link to={':customid'}>Add customer</Link>
       
        </div>
    )
}

export default Customer;
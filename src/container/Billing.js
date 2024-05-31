import { Link } from "react-router-dom";

function Billing(){
    return(
        <div>
        <p>Billing Components</p>
        <Link to={':invoice'}>Add bill</Link>
        </div>
    )
}

export default Billing;
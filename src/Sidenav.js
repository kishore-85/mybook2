import { Link } from "react-router-dom";

function Sidenav(){
    return(
        <div className="Sidenav">
          <ul>
              <li><Link to="/Customer">customer</Link></li>
              <li><Link to="/Product">Prodouct</Link></li>
              <li><Link to="/Billing">Billing</Link></li>
          </ul>
        </div>
    )
}
export default Sidenav;
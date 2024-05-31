import { Link } from "react-router-dom";
function Header(){
    return(
        <div className="Header">
            <div><Link>#Home</Link></div>
            <div>
                <Link className="H-link">Settings</Link>
                <Link className="H-link">Logout</Link>
            </div>            
        </div>
    )
}
export default Header;
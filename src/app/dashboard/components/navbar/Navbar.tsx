import { Link } from "react-router-dom";

export const Navbar = () => {
   return (
    <nav className="nav-dash">
       <ul>
          <li>
            <span><Link to="/config" /></span> 
          </li>
          <li>
            <span><Link to="/config" /></span> 
          </li>
      </ul>
    </nav>
   );
}
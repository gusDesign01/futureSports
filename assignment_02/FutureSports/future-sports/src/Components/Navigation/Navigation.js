import { NavLink } from "react-bootstrap"

const Navigation = () => {
    return (
        <nav className="navbar">
        <div className="container">
        <div className="logo">
 
        </div>

        <div className="nav-elements">
            <ul>
                 <li>
                    <NavLink to="/Photo Gallery">PhotoGallery</NavLink>
                </li>
                 <li>
                     <NavLink to="/Video">Video</NavLink>
                 </li>
                 <li>
                    <NavLink to="/News">News</NavLink>
                 </li>
                 <li>
                    <NavLink to="/Events">Events</NavLink>
                 </li>
            </ul>
        </div>
        </div>
        </nav>

    );
};

export default Navigation;
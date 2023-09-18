import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Navigation = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <h3>Future Sports</h3>
                </div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/News"> News</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/Photo Gallery"> Photo Gallery</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/Events"> Events</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/Video"> Video</a>
                        </li>
                    </ul>
                </div>
        </nav>
    );
};
export default Navigation;
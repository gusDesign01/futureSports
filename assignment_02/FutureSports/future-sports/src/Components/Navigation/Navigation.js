import React from "react";

const Navigation = () => {

    const navItems = ["Photo Gallery", "Contact Us", "News", "Events"];
    const navList = navItems.map((nav, index) => <li key={index}>{nav}</li>)

    return (
        <div>
            <h3>Navigations</h3>
            <ul>{navList}</ul>
        </div>
    );
};

export default Navigation;
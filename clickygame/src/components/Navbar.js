import React from 'react';
import '../styles/Navbar.css';


function Navbar() {
    return (
        <navbar className="navbar">
            <ul>
                <li><a style={{ textDecoration: 'none', color: "white" }} className="home" href="/">Clicky Game</a></li>
                <li>Click an image to begin!</li>
                <li>Score: 0 | Top Score: 0</li>
            </ul>


        </navbar>
    )
}
export default Navbar;
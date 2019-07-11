import React from 'react';
import '../styles/Header.css';


function Header() {
    return (
        <header className="header">
            <div className='headerD'>
                <h1 className="head">Clicky Game</h1>
                <h2 className='info'> Click on an image to earn points, but don't click on any more than once!</h2>

            </div>
        </header>
    )
}
export default Header;
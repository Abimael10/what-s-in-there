import React from 'react';

const Nav = () => {
    return ( 
        <div className="nav">
            <div className="logo">
                <h1>What's in there...?</h1>
            </div>

            <div className="acceso">
                <a href="/" className="acceso-link">Log Out</a>
            </div>
        </div>
    );
}
 
export default Nav;
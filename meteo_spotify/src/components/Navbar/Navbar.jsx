
import React from 'react';
import './Navbar.css';


function NavBar(){
    
    return (
        <nav>
            <ul className="fonction">
                <li className="btn">Home</li>
                <li className="btn">Service</li>
                <li className="btn">Contact</li>
                <li><button className="ApiSpotify">S'identifier</button></li>
            </ul>
           
        </nav>
    );
};

export default NavBar;
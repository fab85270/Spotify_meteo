
import React from 'react';
import AccessTokenContextProvider from '../../pages/Context/AccessTokenContext';


import './Navbar.css';

const NavBar = () => {

    //const  handleLogin = async () => {
        
    


    /*https://www.youtube.com/watch?v=_l-zybV0ark */
    //}
    return (
        <div className="divNav">
            <nav>
                <ul className="fonction">
                    <a href="/"  className="btn">Home</a>
                    <a href="/service"  className="btn">Service</a> 
                    <a href="/about"  className="btn">Contact</a>
                    <li><button onClick={AccessTokenContextProvider} className="ApiSpotify">S'identifier</button></li>
                </ul>
            </nav>
        </div>
        //Créer un composant lien : voir avec le prof si c'est nécéssaire ? 

        /* Notes sur lesquelles réflechir :
            - Suite au callback, un acces token qui dure 60 minutes est renvoyé afin de permettre a l'application d'interragir avec l'API.
            - Comment récupérer ce token ? comment l'utiliser ??
        
        */

    );
};

export default NavBar;

/*

Avec context, sauvegarder le access token utilisé généré dans l'application :
    - Le Contexte offre un moyen de faire passer des données à travers l’arborescence du composant 
    sans avoir à passer manuellement les props à chaque niveau
    - 

*/
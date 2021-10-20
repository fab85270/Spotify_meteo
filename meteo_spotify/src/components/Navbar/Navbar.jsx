
import React, { useState } from 'react';
import AccessTokenContextProvider from '../../pages/Context/AccessTokenContext';
import './Navbar.css';

const NavBar = () => {
    /* Rendre le bouton indisponible quuand on a cliqué dessus ou le rendre "deconnecter" pour se deconnecter : comment se deconnecter ? 
    Retour vers la page principale Avec de nouveau le bouton "seConnecter qui se présente a nous"  */

    /* Utilisation d'un hook initialisé a truc */
    const[clicked, setClicked] = useState(false);


    return (
        <div className="divNav">
            <nav>
                <ul className="fonction">
                    <a href="/"  className="btn">Home</a>
                    <a href="/service"  className="btn">Service</a> 
                    <a href="/about"  className="btn">Contact</a>
                    <li><button onClick={AccessTokenContextProvider,()=> setClicked(!clicked)} className="ApiSpotify">
                        {!clicked && "Se connecter"}
                        {clicked && "Se deconnecter"}  
                        </button>
                    </li>
                </ul>
            </nav>
        </div>


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
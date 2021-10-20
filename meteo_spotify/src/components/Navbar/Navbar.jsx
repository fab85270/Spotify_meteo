
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

        /* 
        Choses à faire : 
            - créer un composant bouton qui permet donc de déterminer une redirection vers une page spécifique selon le type du bouton.
        On aura ainsi un bouton "clicked" => On se connecte et donc on va être redirigé vers une page avec les différentes utilisations 
        Et l'inverse du bouton "clicked"*/

    );
};

export default NavBar;

/*

Avec context, sauvegarder le access token utilisé généré dans l'application : reprendre les boutons fait dans le passé.
    - Le Contexte offre un moyen de faire passer des données à travers l’arborescence du composant 
    sans avoir à passer manuellement les props à chaque niveau
    - 

*/
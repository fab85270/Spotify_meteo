
import React, {useContext, useState } from 'react';
import {AccessTokenContext} from '../../Context/AccessTokenContext';
import './Navbar.css';

const NavBar = () => {
    /* Rendre le bouton indisponible quuand on a cliqué dessus ou le rendre "deconnecter" pour se deconnecter : comment se deconnecter ? 
    Retour vers la page principale Avec de nouveau le bouton "seConnecter qui se présente a nous"  */

    /* Utilisation des hooks */
    const[clicked, setClicked] = useState(false);
    const {accessToken,Authenticate} = useContext(AccessTokenContext);

    /* Fonction des actions réalisées suite au clique du bonton connexion/déconnection  */

    const Click = async() => { //C'est bien de ne mettre que une fonction dans un "OnClick d'un boutton"
        await Authenticate();
        setClicked(!clicked);
    }

    return (
        <div className="divNav">
            <nav>
                <ul className="fonction">
                    <a href="/"  className="btn">Home</a>
                    <a href="/service"  className="btn">Service</a> 
                    <a href="/about"  className="btn">Contact</a>
                    <li><button onClick={Click()} className="ApiSpotify">
                        {!clicked && "Se connecter"}
                        {clicked && "Se deconnecter"}  
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
/**
 * Interessant de créer une fonction dans ce composant navbar qui regroupe toutes les actions qu'on veut réaliser lorsque on clique sur le 
 * bouton "se connecter" 
 */
        /* 
        Choses à faire : 
            - créer un composant bouton qui permet donc de déterminer une redirection vers une page spécifique selon le type du bouton.
        On aura ainsi un bouton "clicked" => On se connecte et donc on va être redirigé vers une page avec les différentes utilisations 
        Et l'inverse du bouton "clicked"*/

    );
};

export default NavBar;


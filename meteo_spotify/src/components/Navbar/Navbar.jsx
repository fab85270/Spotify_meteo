
import React, {useContext, useState } from 'react';
import { useHistory,Link } from "react-router-dom";
import {AccessTokenContext} from '../../Context/AccessTokenContext';
import { BoutonContext } from '../../Context/BoutonContext';

import './Navbar.css';

const NavBar = () => {
    
    /* Rendre le bouton indisponible quuand on a cliqué dessus ou le rendre "deconnecter" pour se deconnecter : comment se deconnecter ? 
    Retour vers la page principale Avec de nouveau le bouton "seConnecter qui se présente a nous"  */

    /* Utilisation des hooks */
    //const[clicked, setClicked] = useState(false);
    const {accessToken,authenticate} = useContext(AccessTokenContext);
    const {clicked,changeContexte} = useContext(BoutonContext);

    let history = useHistory();

    /* Fonction des actions réalisées suite au click du bonton connexion/déconnection  */

    const click = async() => { //C'est bien de ne mettre que une fonction dans un "OnClick d'un boutton"
        if(!clicked){
            /* On récupère le AccessToken de l'API spotify */
            await authenticate(); 
            changeContexte(); //Afin de changer la valeur du contexte
            history.push("/");
            
            /* On redirige vers la page avec l'ensemble des fonctionalités de notre application pour interragir avec l'API spotify */

        } else{
            /* On redirige vers le home de connexion et on "annule" le token de connexion en le crypant ? modifiant? */
            changeContexte(); //Afin de changer la valeur du context
            history.push("/");
        }
    }

    return (
        <div className="divNav">
            <nav>
                <ul className="fonction">
                    <Link to="/"  className="btn">Home</Link>
                    <Link to="/service"  className="btn">Service</Link> 
                    <Link to="/about"  className="btn">Contact</Link>
                    <li><button onClick={() => click()} className="ApiSpotify">
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



import React, {useContext, useState } from 'react';
import { useHistory,Link } from "react-router-dom";
import {AccessTokenContext} from '../../Context/AccessTokenContext';
import { BoutonContext } from '../../Context/BoutonContext';
import { TraductionContext } from '../../Context/TraductionContext';
import {Dropdown} from 'react-dropdown';
import { Button,  ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';



import './Navbar.css';

const NavBar = () => {
    
    /* Rendre le bouton indisponible quuand on a cliqué dessus ou le rendre "deconnecter" pour se deconnecter : comment se deconnecter ? 
    Retour vers la page principale Avec de nouveau le bouton "seConnecter qui se présente a nous"  */

    /* Utilisation des hooks */
    //const[clicked, setClicked] = useState(false);
    const {accessToken,isConnected,authenticate,disconect} = useContext(AccessTokenContext);
    const {clicked,changeContexte} = useContext(BoutonContext);
    const {traduction,traductionApp} = useContext(TraductionContext);

    let history = useHistory();

    /* Fonction des actions réalisées suite au click du bonton connexion/déconnection  */

    const click = async() => { //C'est bien de ne mettre que une fonction dans un "OnClick d'un boutton"
        if(!clicked){
            /* On récupère le AccessToken de l'API spotify */
            await authenticate(); 
            changeContexte(); //Afin de changer la valeur du contexte
            history.push("/spotiTherMe");
            
            /* On redirige vers la page avec l'ensemble des fonctionalités de notre application pour interragir avec l'API spotify */

        } else{
            /* On redirige vers le home de connexion et on "annule" le token de connexion en le crypant ? modifiant? */
            changeContexte(); //Afin de changer la valeur du context
            disconect(); 
            history.push("/");
        }
    }

    return (
        <div className="divNav">
            <nav>
                <ul className="fonction">
                    <Link to="/"  className="btn">
                        {traduction && "Home"}
                        {!traduction && "Accueil"}
                    </Link>
                    <Link to="/service"  className="btn">
                        Service
                    </Link> 
                    <Link to="/about"  className="btn">
                        {traduction && "About us"}
                        {!traduction && "Nous concernant"}
                    </Link>
                    <li><button onClick={() => click()} className="ApiSpotify">
                        {!clicked && !traduction && "Se connecter"}
                        {clicked && !traduction && "Se deconnecter"}  
                        {!clicked && traduction && "Connect"}
                        {clicked && traduction && "Disconnect"} 
                        </button>
                    </li>
                    <li>
                                <button onClick={() => traductionApp()} className="ApiSpotify">
                                    {traduction && "Translate"}
                                    {!traduction && "Traduire"}
                                </button>
                    </li>
                
                    <div>
                
                    <DropdownButton id="dropdown-basic-button" title="coucou">
                        <li>
                            <button>coucou</button>
                            <button>ca va </button>
                        </li>
                    </DropdownButton>
                     </div>
                  
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


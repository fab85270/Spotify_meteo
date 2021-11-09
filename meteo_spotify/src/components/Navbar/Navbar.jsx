
import React, {useContext, useState } from 'react';
import { useHistory,Link } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import {AccessTokenContext} from '../../Context/AccessTokenContext';
import { BoutonContext } from '../../Context/BoutonContext';
import { TraductionContext } from '../../Context/TraductionContext';
import logoSpotiTherMe from '../../Images/SpotiTherMeLogo.jpeg';
import './Navbar.css';

const NavBar = () => {
    
    /* Rendre le bouton indisponible quuand on a cliqué dessus ou le rendre "deconnecter" pour se deconnecter : comment se deconnecter ? 
    Retour vers la page principale Avec de nouveau le bouton "seConnecter qui se présente a nous"  */

    /* Utilisation des hooks */
    const {accessToken,isConnected,authenticate,disconect} = useContext(AccessTokenContext);
    const {clicked,changeContexte} = useContext(BoutonContext);
    const {traduction,traductionApp} = useContext(TraductionContext);
    let history = useHistory();

    /* Fonction des actions réalisées suite au click du bonton connexion/déconnection  */

    const click = async() => { //C'est bien de ne mettre que une fonction dans un "OnClick d'un boutton"

        //test:
            history.push("/connectAPI");


        if(clicked){
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
                        <li>
                            <Link to="/" className="btn">
                                <img 
                                    alt="logoSpotiTherMe"
                                    src={logoSpotiTherMe}
                                    wight="45"
                                    height="45"
                                />   
                            </Link>  
                        </li>    
                        <Link to="/"  className="btn">
                            {traduction && "Home"}
                            {!traduction && "Accueil"}
                        </Link>
                        <Link to="/meteo" className="btn">
                            Meteo
                        </Link>
                        <Link to="/service"  className="btn">
                            Service
                        </Link> 
                        <Link to="/about"  className="btn">
                            {traduction && "About us"}
                            {!traduction && "Nous concernant"}
                        </Link>
                        {clicked && (
                            <Link to="/spotiTherMe"  className="btn">
                                SpotiTheirMe
                        </Link>
                        )}
                        <li><Button variant="outline-secondary" onClick={() => click()} className="ApiSpotify">
                                {!traduction && clicked && "Se deconnecter"}  
                                {traduction && clicked && "Disconnect"} 
                                {!traduction && !clicked && "Se connecter"}  
                                {traduction && !clicked && "Connect"} 
                            </Button>
                        </li>
                        <li>
                            <Form.Select arial-label="Default select example" onChange={(event)=>traductionApp(event)}>
                                <option>
                                    {traduction && "Translate"}
                                    {!traduction && "Traduction"}
                                </option>
                                <option value = "1">
                                    {traduction && "English"}
                                    {!traduction && "Anglais"}
                                </option>
                                <option value="2">
                                    {traduction && "French"}
                                    {!traduction && "Français"}
                                </option>
                            </Form.Select>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
<<<<<<< HEAD
    return (
        <div className="divNav">
            <ul>
                <li><a class="active" href="/">Home</a></li>
                <li><a href="/service">Service</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="#about"><button onClick={handleLogin} className="ApiSpotify">S'identifier</button></a></li>
            </ul>

        </div>
        //Créer un composant lien : voir avec le prof si c'est nécéssaire ? 
    );
};

export default NavBar;
=======
export default NavBar;

>>>>>>> 7e0ed6919bc32257206bc0670493ac463993113a

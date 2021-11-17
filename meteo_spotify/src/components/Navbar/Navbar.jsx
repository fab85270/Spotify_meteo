
import React, {useContext, useState } from 'react';
import { useHistory,Link } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import {AccessTokenContext} from '../../Context/AccessTokenContext';
import { BoutonContext } from '../../Context/BoutonContext';
import {DarkModeContext} from '../../Context/DarkModeContext';
import { TraductionContext } from '../../Context/TraductionContext';

import logoSpotiTherMe from '../../Images/SpotiTherMeLogo.png';
import './Navbar.css';

const NavBar = () => {

    /* Utilisation des hooks(contexts,states) */
    
    const {disconect} = useContext(AccessTokenContext);
    const{dark,setDark} = useContext(DarkModeContext);
    const {clicked,changeContexteBouton} = useContext(BoutonContext);
    const {traduction,traductionApp} = useContext(TraductionContext);
    let history = useHistory();

    const themeToggler = () => {
        dark === 'light' ? setDark('dark') : setDark('light')
    }
    /* Fonction des actions réalisées suite au click du bonton connexion/déconnection  */

    const click = async() => { //C'est bien de ne mettre que une fonction dans un "OnClick d'un boutton"

        /* Redirection vers la page du formulaire de connection */
        history.push("/connectAPI");

        if(clicked){
            changeContexteBouton(); //Afin de changer la valeur du context du bouton (se Connecter/Deconnecter)
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
                            <Button variant="outline-secondary" onClick={() => themeToggler()} className="ApiSpotify">
                                Theme
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
export default NavBar;


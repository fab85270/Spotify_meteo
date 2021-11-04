
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
    if(clicked){
        return (
            <div className="divNav">
                <nav>
                    <ul className="fonction">
                        <li>
                            <img 
                                alt="logoSpotiTherMe"
                                src={logoSpotiTherMe}
                                wight="45"
                                height="45"
                            />   
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
                        <li><Button variant="outline-secondary" onClick={() => click()} className="ApiSpotify">
                                {!traduction && "Se deconnecter"}  
                                {traduction && "Disconnect"} 
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
    }else{
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
                        <li><Button variant="outline-secondary" onClick={() => click()} className="ApiSpotify">
                            {!traduction && "Se connecter"}
                            {traduction && "Connect"}
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
    
};

export default NavBar;


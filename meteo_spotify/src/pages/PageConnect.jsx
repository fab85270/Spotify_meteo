import React, {useContext,useState} from 'react';
import { useHistory} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import Form_Connect from "../components/Form_Connect/Form_Connect";
import { GlobalStyles } from "../components/GlobalStyle/GlobalStyle";
import { lightTheme, darkTheme } from "../components/Theme"
import { DarkModeContext } from '../Context/DarkModeContext';
import { BoutonContext } from '../Context/BoutonContext';
import {AccessTokenContext} from '../Context/AccessTokenContext';

const PageConnect = () => {
    
    /* Use context utile pour
        La connexion
        Le choix du profil de connexion
        Le darkMode
    */
    const {accessToken,isConnected,authenticate,disconect} = useContext(AccessTokenContext);
    const {clicked,changeContexteBouton} = useContext(BoutonContext);
    const {dark, setDark,darkApp} = useContext(DarkModeContext);
    const[selectedValue,setSelectedValue] = useState("1");
    let history = useHistory();
 
    /* Méthode pour récupérer le compte de la personne selectionnée */
    const recupererPersonne = (event) => {
        setSelectedValue(event.target.value);
    }

     /* Méthode pour se connecter au compte choisit */
    const connexionCompte = async (event) =>{
        event.preventDefault();
         /* On récupère l AccessToken de l'API spotify pour le compte désiré */
            await authenticate(selectedValue); 
            changeContexteBouton(); //Pour changer la valeur du contexte
            history.push("/spotiTherMe");
    }
    return( 
        <ThemeProvider theme={dark === 'light' ? lightTheme : darkTheme}>
            <>
            <GlobalStyles/>
                <Form_Connect
                    value={selectedValue}
                    checkSub={connexionCompte}
                    checkChange={recupererPersonne}
                >     
                </Form_Connect>
            </>
        </ThemeProvider>
        );
}
export default PageConnect;
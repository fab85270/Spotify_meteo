import React, {useContext,useState} from 'react';
import { useHistory} from "react-router-dom";
import Form_Connect from "../components/Form_Connect/Form_Connect";
import {AccessTokenContext} from '../Context/AccessTokenContext';
import { BoutonContext } from '../Context/BoutonContext';


const PageConnect = () => {
    
    /* Utilisation des hooks */

    const {accessToken,isConnected,authenticate,disconect} = useContext(AccessTokenContext);
    const {clicked,changeContexte} = useContext(BoutonContext);
    const[selectedValue,setSelectedValue] = useState("1");
    let history = useHistory();
 
    /* Méthode pour récupérer le compte de la personne selectionnée */

    const recupererPersonne = (event) => {
        setSelectedValue(event.target.value);
        console.log("essaie recup : "+event.target.value);

    }

     /* Méthode pour se connecter au compte choisit */
    const connexionCompte = async (event) =>{

        event.preventDefault();
        console.log(selectedValue);

         /* On récupère le AccessToken de l'API spotify  du compte désiré */

            await authenticate(selectedValue); 
            changeContexte(); //Afin de changer la valeur du contexte
            history.push("/spotiTherMe");
    }
    return(   
            <Form_Connect
                value={selectedValue}
                checkSub={connexionCompte}
                checkChange={recupererPersonne}
            >     
            </Form_Connect>
        );
}
export default PageConnect;
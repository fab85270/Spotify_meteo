import React,{useContext} from 'react';
import Form_CP from '../Form_CP/Form_CP';
import LayoutGlobal from '../../Layout/LayoutGlobal';
import {AccessTokenContext} from '../../Context/AccessTokenContext';
import {MeteoContext} from '../../Context/MeteoContext';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import DisplayMeteo from '../DisplayMeteo/DisplayMeteo';
import { TraductionContext } from '../../Context/TraductionContext';


const PageMeteo = () => {

    /* Utilisation du hook (context,états) */
    const {accessToken,isConnected,authenticate,disconect} = useContext(AccessTokenContext);
    const{codePostal,nomVille,numTemps,intituleMeteo,cpErreur,changeContexte,authenticateCP,setCPErreur} = useContext(MeteoContext);
    const {traduction,traductionApp} = useContext(TraductionContext);

    /* tests autours des states de tableau (à peut etre virer) */
    const [city,setCity] = useState([]); //Plusieurs villes peuvent être attribuées à un même code Postal

    let history = useHistory();

    /* On doit être connecté pour accéder a la méteo */
    if(!isConnected){ 
        history.push("/");
    }



    /* Utilisation de hooks(useState) */
    const [cp, setCP] = useState(""); 


    const recupererCP = (event) => {
        setCP(event.target.value);
        console.log(event.target.value);

    }
 
    const recupererMeteo = async (event) => {
        event.preventDefault();
        authenticateCP(cp);
    }
    return (  
            <LayoutGlobal children ={
            <div className='layout'>  
            {cpErreur &&
                <p>
                    <strong>
                        {traduction && "Entry error: Please enter a valid postal code"}
                        {!traduction && " Erreur saisie : Veuillez saisir un code postal valide"}
                    </strong>
                </p>
            }      
                <Form_CP
                    checkSubmit={recupererMeteo}
                    checkChange={recupererCP}
                />
            <DisplayMeteo/>

            </div>  

            
        }>
        </LayoutGlobal>
    )

}
export default PageMeteo;

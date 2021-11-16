import React,{useContext} from 'react';
import Form_CP from '../Form_CP/Form_CP';
import LayoutGlobal from '../../Layout/LayoutGlobal';
import {AccessTokenContext} from '../../Context/AccessTokenContext';
import {MeteoContext} from '../../Context/MeteoContext';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import DisplayMeteo from '../DisplayMeteo/DisplayMeteo';
import { TraductionContext } from '../../Context/TraductionContext';

import './PageMeteo.css'

const PageMeteo = () => {

    /* Utilisation du hook (context,états) */
    const {isConnected} = useContext(AccessTokenContext);
    const{cpErreur,authenticateCP} = useContext(MeteoContext);
    const {traduction} = useContext(TraductionContext);
    const [cp, setCP] = useState(""); 

    let history = useHistory();

    /* Methode de récupération du CP saisit dans le formulaire */
    const recupererCP = (event) => {
        setCP(event.target.value);
    }
 
    /* Méthode de récupération de la méteo associée au code postal renseigné dans le formulaire */
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
                <div className="formulaire">
                    <Form_CP
                        checkSubmit={recupererMeteo}
                        checkChange={recupererCP}
                    />
                </div>      
                <DisplayMeteo/>
            </div>       
        }></LayoutGlobal>
    )

}
export default PageMeteo;

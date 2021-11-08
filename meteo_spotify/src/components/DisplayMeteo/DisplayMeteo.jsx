import React, {useContext, useState } from 'react';
import {MeteoContext} from '../../Context/MeteoContext';
import tempsCouvert from '../../Images/img_meteo/Couvert.svg';
import tempsEclair from '../../Images/img_meteo/Eclair.svg';
import tempsNeige from '../../Images/img_meteo/Neige.svg';
import tempsNuageux from '../../Images/img_meteo/nuageux.jpg';
import tempsPluvieux from '../../Images/img_meteo/Pluvieux.svg';
import tempsSoleil from '../../Images/img_meteo/Sun.svg';
import './DisplayMeteo.css';

const DisplayMeteo = () =>{

    /* Utilisation du context de météo (codePostal/nomVille/numTemps) */
    const{codePostal,nomVille,numTemps,intituleMeteo,changeContexte} = useContext(MeteoContext);

    return (
        <>
            {numTemps >= 0 && (
            <div className="tempsMeteo">
                    {numTemps == 0 && 
                        <img src={tempsSoleil}/>
                        && <p>Le temps ensoleillé sur {nomVille} ({codePostal})</p>
                    }   
                    {numTemps > 0 && numTemps < 5 && 
                        <img src={tempsNuageux}/>
                        && <p>Ciel {intituleMeteo} sur {nomVille} ({codePostal})</p>}
                    {numTemps == 5 && 
                        <img src={tempsCouvert}/>
                        && <p>Ciel {intituleMeteo} sur {nomVille} ({codePostal})</p>
                    }
                    {numTemps > 9 && numTemps < 17 || numTemps >= 40 && numTemps <= 48 && 
                        <img src={tempsPluvieux}/>
                        && <p>Temps {intituleMeteo} sur {nomVille} ({codePostal})</p>
                    }
                    {numTemps >= 20 && numTemps <= 22  && numTemps >= 60 && numTemps <=68 &&
                        <img src={tempsNeige}/>
                        && <p>{intituleMeteo} sur {nomVille} ({codePostal})</p>
                    }
                </div>
            )}
            <br/>
        </>        
    );   
}
export default DisplayMeteo;
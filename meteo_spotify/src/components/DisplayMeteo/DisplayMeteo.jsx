import React, {useContext, useState } from 'react';
import Image from 'react-bootstrap/Image'
import {MeteoContext} from '../../Context/MeteoContext';
import tempsNuageux from '../../Images/img_meteo/nuageux.jpg';
import './DisplayMeteo.css';

const DisplayMeteo = () =>{

    /* Utilisation du context de météo (codePostal/nomVille/numTemps) */
    const{codePostal,nomVille,numTemps,intituleMeteo,changeContexte} = useContext(MeteoContext);

    return (
        <>
            {numTemps >= 0 && (
            <div className="tempsMeteo">
                    {numTemps == 0 && 
                        <div className="Soleil">
                            <p>Le temps ensoleillé sur {nomVille} ({codePostal})</p>
                            <Image src="{tempsSoleil}"/>    
                        </div>
                    }   
                    {numTemps > 0 && numTemps < 5 && 
                        <div className="Nuageux">
                            <p>Ciel {intituleMeteo} sur {nomVille} ({codePostal})</p>
                            <Image src={tempsNuageux}/>
                        </div>}
                    {numTemps == 5 && 
                        <div className="Couvert">
                            <p>Ciel {intituleMeteo} sur {nomVille} ({codePostal})</p>
                            <img src="{tempsCouvert}"/> 
                        </div>
                    }
                    {numTemps > 9 && numTemps < 17 || numTemps >= 40 && numTemps <= 48 && 
                        <img src="{tempsPluvieux}"/>
                        && <p>Temps {intituleMeteo} sur {nomVille} ({codePostal})</p>
                    }
                    {numTemps >= 20 && numTemps <= 22  && numTemps >= 60 && numTemps <=68 &&
                        <img src="{tempsNeige}"/>
                        && <p>{intituleMeteo} sur {nomVille} ({codePostal})</p>
                    }
                </div>
            )}
            <br/>
        </>        
    );   
}
export default DisplayMeteo;
import React, {useContext, useState } from 'react';
import Image from 'react-bootstrap/Image'
import {MeteoContext} from '../../Context/MeteoContext';
import tempsNuageux from '../../Images/img_meteo/TestNuageux.jpg';
import tempsSoleil from '../../Images/img_meteo/Soleil.jpg';
import tempsCouvert from '../../Images/img_meteo/Couvert.jpg';
import tempsPluvieux from '../../Images/img_meteo/Pluvieux.jpg';
import tempsNeige from '../../Images/img_meteo/Neige.jpg';

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
                            <p className="nomVille">{nomVille}</p>
                            <Image src={tempsSoleil}/>    
                            <p className="intitule">Temps ensoleillé</p>
                        </div>
                    }   
                    {numTemps > 0 && numTemps < 5 && 
                        <div className="Nuageux">
                            <p className="nomVille">{nomVille}</p>
                            <Image src={tempsNuageux}/>
                            <p className="intitule">{intituleMeteo}</p>
                        </div>}
                    {numTemps == 5 && 
                        <div className="Couvert">
                            <p className="nomVille">{nomVille}</p>
                            <Image src={tempsCouvert}/>
                            <p className="intitule">{intituleMeteo}</p> 
                        </div>
                    }
                    {numTemps > 9 && numTemps < 17 || numTemps >= 40 && numTemps <= 48 && 
                        <div className="Pluvieux">
                            <p className="nomVille">{nomVille}</p>
                            <Image src={tempsPluvieux}/>
                            <p className="intitule">{intituleMeteo}</p>
                        </div>
                    }
                    {numTemps >= 20 && numTemps <= 22  && numTemps >= 60 && numTemps <=68 &&
                        <div className="Neige">
                            <p className="nomVille">{nomVille}</p>
                            <Image src={tempsNeige}/>
                            <p className="intitule">{intituleMeteo}</p>
                        </div>
                    }
                </div>
            )}
            <br/>
        </>        
    );   
}
export default DisplayMeteo;
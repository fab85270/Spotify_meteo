import React, {useContext, useState } from 'react';
import {MeteoContext} from '../../Context/MeteoContext';
import tempsCouvert from '../../Images/img_meteo/Couvert.svg';
import tempsEclair from '../../Images/img_meteo/Eclair.svg';
import tempsNeige from '../../Images/img_meteo/Neige.svg';
import tempsNuageux from '../../Images/img_meteo/Nuageux.svg';
import tempsPluvieux from '../../Images/img_meteo/Pluvieux.svg';
import tempsSoleil from '../../Images/img_meteo/Sun.svg';

const DisplayMeteo = () =>{

    /* Utilisation du context de météo (codePostal/nomVille/numTemps) */
    const{codePostal,nomVille,numTemps,changeContexte} = useContext(MeteoContext);

    return (
        <div className="tempsMeteo">
            {numTemps}
            {numTemps == 0 && <img src={tempsSoleil}/>}
            {numTemps > 0 && numTemps < 5 && <img src={tempsNuageux}/>}
            {numTemps == 5 && <img src={tempsCouvert}/>}
            {numTemps > 9 && numTemps < 17 || numTemps >= 40 && numTemps <= 48 && <img src={tempsPluvieux}/>}
        </div>
        
        
         
    );
    
}

export default DisplayMeteo;
import React, {useContext, useState } from 'react';
import {MeteoContext} from '../../Context/MeteoContext';

import tempsNuageux from '../../Images/img_meteo/nuageux.png';
import tempsSoleil from '../../Images/img_meteo/Soleil.png';
import tempsCouvert from '../../Images/img_meteo/Couvert.png';
import tempsPluvieux from '../../Images/img_meteo/Pluvieux.png';
import tempsNeige from '../../Images/img_meteo/Neige.png';
import tempsBrouillard from '../../Images/img_meteo/brouillard.png'; 
import tempsOrage from '../../Images/img_meteo/orage.png'


import './DisplayMeteo.css';
const DisplayMeteo = () =>{

    /* Utilisation du context de météo (codePostal/nomVille/numTemps) */
    const{codePostal,nomVille,numTemps,intituleMeteo, valTemp, numTempsH3,valTempH3, numTempsH6,valTempH6 ,numTempsH9,valTempH9,changeContexte} = useContext(MeteoContext);

    var d = new Date();
    var heureH0 = d.getHours();

    const heureFormat24 = (heure, ecart) => {
        if(heure+ecart >=24){
            return heure+ecart-24 + "H";
        }
        else{
            return heure+ecart + "H";
        }
    }


    const numEnImage = (numero) =>{
        console.log(numero)
        if((numero >= 20 && numero <= 32 || numero >= 60 && numero <= 78 || numero == 142 || numero >= 220 && numero <= 222)){
            return <img src={tempsNeige}
                        style={{height: 20 + '%', width: 20 + '%',}}                     />;
            
        }else if(numero >= 1 && numero <= 4){
            return <img src={tempsNuageux}
                        style={{height: 20 + '%', width: 20 + '%',}}                     />;

        }else if(0==numero){
            return <img src={tempsSoleil}
                        style={{height: 20 + '%', width: 20 + '%',}}                     />;

        }else if((numero == 5)){
            return <img src={tempsCouvert}
                        style={{height: 20 + '%', width: 20 + '%',}}                     />;

        }else if(numero >= 10 && numero <= 16 || numero >= 30 && numero <= 48 || numero >= 70 && numero <= 78 || numero >= 140 && numero <= 141 || numero >= 211 && numero <=212 || numero >= 230 && numero <=232){
            return <img src={tempsPluvieux}
                        style={{height: 20 + '%', width: 20 + '%',}}                     />;
        } else if(numero >= 6 && numero <= 7){
            return <img src={tempsBrouillard}
                        style={{height: 20 + '%', width: 20 + '%',}}                     />;
        }else if(numero >= 100 && numero <= 138){
            return <img src={tempsOrage}
                        style={{height: 20 + '%', width: 20 + '%',}}                     />;
        }
    }
    return (
        <div className="divMeteo">
            {numTemps >= 0 && (
                <div className="tempsMeteo">
                    <table>
                        <tr id="lignePrincipale">
                            <th rowspan="2" id="cellulePrincipale">{nomVille}, {codePostal}</th>
                            <th>{valTemp} °C</th>
                            <th rowspan="2" id="cellulePrincipale">{numEnImage(numTemps)}</th>
                        </tr>
                        <tr id="lignePrincipale">
                            <td id="cellulePrincipale">{intituleMeteo}</td>
                        </tr>
                        <tr>
                            <td>{heureFormat24(heureH0,3)}</td>
                            <td>{heureFormat24(heureH0,6)}</td>
                            <td>{heureFormat24(heureH0,9)}</td>
                        </tr>
                        
                        <tr>
                            <td >{numEnImage(numTempsH3)}</td>
                            <td >{numEnImage(numTempsH6)}</td>
                            <td >{numEnImage(numTempsH9)}</td>
                        </tr>
                        <tr>
                            <td>{valTempH3}°C</td>
                            <td>{valTempH6}°C</td>
                            <td>{valTempH9}°C</td>
                        </tr>
                        
                        
                        
                    </table>
                            
                        
                        
                </div>
            )}
            <br/>
        </div>        
    );   
}
export default DisplayMeteo;
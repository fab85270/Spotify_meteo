import React, {useContext, useState } from 'react';
import Image from 'react-bootstrap/Image'
import {MeteoContext} from '../../Context/MeteoContext';

import tempsNuageux from '../../Images/img_meteo/nuageux.jpg';
import tempsSoleil from '../../Images/img_meteo/Soleil.jpg';
import tempsCouvert from '../../Images/img_meteo/Couvert.jpg';
import tempsPluvieux from '../../Images/img_meteo/Pluvieux.jpg';
import tempsNeige from '../../Images/img_meteo/Neige.jpg';
import tempsNeigePluie from '../../Images/img_meteo/neige_pluie.jpg';


import './DisplayMeteo.css';
const DisplayMeteo = () =>{

    /* Utilisation du context de météo (codePostal/nomVille/numTemps) */
    const{codePostal,nomVille,numTemps,intituleMeteo, valTemp, numTempsH3,valTempH3, numTempsH6,valTempH6 ,numTempsH9,valTempH9,changeContexte} = useContext(MeteoContext);

    const numEnImage = (numero) =>{
        if((20<=numero && 32>=numero) || (60<=numero && 68>=numero) || (220<=numero && 222>=numero)){
            console.log("neige");
            return <img src={tempsNeige}
                        style={{height: 20 + '%', width: 20 + '%',}}                     />;
            
        }else if(16==numero || (3==numero && 4==numero)){
            console.log("nuageux");
            return <img src={tempsNuageux}
                        style={{height: 20 + '%', width: 20 + '%',}}                     />;


        }else if(0==numero){
            console.log("soleil");
            return <img src={tempsSoleil}
                        style={{height: 20 + '%', width: 20 + '%',}}                     />;

        }else if((1<=numero && 2>=numero) || (5<=numero && 7>=numero)){
            console.log("couvert");
            return <img src={tempsCouvert}
                        style={{height: 20 + '%', width: 20 + '%',}}                     />;

        }else{
            console.log("else");
            return <img src={tempsPluvieux}
                        style={{height: 20 + '%', width: 20 + '%',}}                     />;
        }
    }
    return (
        <div className="test">
            {numTemps >= 0 && (
            <div className="tempsMeteo">
                        <table>
                            <tr>
                                <th rowspan="2">{nomVille}, {codePostal}</th>
                                <th>{valTemp} °C</th>
                                <th rowspan="2">{numEnImage(numTemps)}</th>
                            </tr>
                            <tr>
                                <td>{intituleMeteo}</td>
                            </tr>
                            <tr>
                                <td>H+3</td>
                                <td>H+6</td>
                                <td>H+9</td>
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
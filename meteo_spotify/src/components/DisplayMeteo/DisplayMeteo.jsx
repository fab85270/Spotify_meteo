import React, {useContext, useState } from 'react';
import Image from 'react-bootstrap/Image'
import {MeteoContext} from '../../Context/MeteoContext';
import tempsNuageux from '../../Images/img_meteo/TestNuageux.jpg';
import tempsSoleil from '../../Images/img_meteo/Soleil.jpg';
import tempsCouvert from '../../Images/img_meteo/Couvert.jpg';
import tempsPluvieux from '../../Images/img_meteo/Pluvieux.jpg';
import tempsNeige from '../../Images/img_meteo/Neige.jpg';
import tempsNeigePluie from '../../Images/img_meteo/neige_pluie.jpg';

import './DisplayMeteo.css';
const DisplayMeteo = () =>{

    /* Utilisation du context de météo (codePostal/nomVille/numTemps) */
    const{codePostal,nomVille,numTemps,intituleMeteo, valTemp, numTempsH3,intituleMeteoH3,valTempH3,numTempsH6,intituleMeteoH6,valTempH6,numTempsH9,intituleMeteoH9,valTempH9,changeContexte} = useContext(MeteoContext);

    return (
        <div className="test">
            {numTemps >= 0 && (
            <div className="tempsMeteo">
                    {numTemps == 0 && 
                        <table>
                            <tr>
                                <th rowspan="2">{nomVille}</th>
                                <th>{valTemp} °C</th>
                                <th rowspan="2"><Image src={tempsSoleil}/></th>
                            </tr>
                            <tr>
                                <td>Temps ensoleillé</td>
                            </tr>
                            <tr>
                                <td>H+3</td>
                                <td></td>
                                <td>$100</td>
                            </tr>
                            
                            <tr>
                                <td >image1</td>
                                <td >image2</td>
                                <td >image3</td>
                            </tr>
                            <tr>
                                <td>February</td>
                                <td>$80</td>
                                <td>$100</td>
                            </tr>
                            
                            
                            
                        </table>
                        
                    }   
                    {numTemps > 0 && numTemps < 5 && 
                        <div className="Nuageux">
                            <p className="nomVille">{nomVille}</p>
                            <Image src={tempsNuageux}/>
                            <p className="intitule">{intituleMeteo}</p>
                            <p> {valTemp}</p>
                        </div>}
                    {numTemps == 5 && 
                        <div className="Couvert">
                            <p className="nomVille">{nomVille}</p>
                            <Image src={tempsCouvert}/>
                            <p className="intitule">{intituleMeteo} {valTemp}</p> 
                        </div>
                    }
                    {numTemps > 9 && numTemps < 17 || numTemps >= 40 && numTemps <= 48 || numTemps >=210 && numTemps <=212 && 
                        <div className="Pluvieux">
                            <p className="nomVille">{nomVille}</p>
                            <Image src={tempsPluvieux}/>
                            <p className="intitule">{intituleMeteo} {valTemp}</p>
                        </div>
                    }
                    {numTemps >= 20 && numTemps <= 22  && numTemps >= 60 && numTemps <=68 &&
                        <div className="Neige">
                            <p className="nomVille">{nomVille}</p>
                            <Image src={tempsNeige}/>
                            <p className="intitule">{intituleMeteo} {valTemp}</p>
                        </div>
                    }
                    {numTemps >= 30 && numTemps <= 32  && numTemps >= 70 && numTemps <=78 &&
                        <div className="NeigePluie">
                            <p className="nomVille">{nomVille}</p>
                            <Image src={tempsNeigePluie}/>
                            <p className="intitule">{intituleMeteo} {valTemp}</p>
                        </div>
                    }
                    {numTemps >= 100 && numTemps <= 141  && numTemps >= 70 && numTemps <=78 &&
                        <div className="Orage">
                            <p className="nomVille">{nomVille}</p>
                            <Image src=""/>
                            <p className="intitule">{intituleMeteo} {valTemp}</p>
                        </div>
                    }
                </div>
            )}
            <br/>
        </div>        
    );   
}
export default DisplayMeteo;
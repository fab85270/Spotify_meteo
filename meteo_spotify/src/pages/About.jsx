
import LayoutGlobal from '../Layout/LayoutGlobal';
import React, {useContext} from 'react';
import { TraductionContext } from '../Context/TraductionContext';
import ButtonRedirection from '../components/Button/ButtonRedirection';
import { useHistory,Link } from "react-router-dom";


const About = () =>{

    /* Utilisation des hooks(états/contexts) */
    const {traduction,traductionApp} = useContext(TraductionContext);
    

    return(
    <LayoutGlobal children={
        <>
            <h1 style={{textAlign:'center'}}>
                {!traduction && "Notre projet"}
                {traduction && "Our Project"}
            </h1>
            <div style={{textAlign:'center'}}>
                <p>
                    {!traduction && "Bienvenue dans notre projet de M1 en Architecture Logiciel et web"}
                    {traduction && "Welcome in our M1 Projet for Architecture Logiciel et Web"}
                </p>
                <p>
                    {!traduction && "Ce projet consiste à utiliser deux API, celles de spotify et d'une plateforme de météo"}
                    {traduction && "This project consists of using two APIs, those of spotify and a weather platform"}
                
                </p>
                <div>
                    {!traduction && "Ce projet a été réalisé en commun par"}
                    {traduction && "This project was carried out jointly by"}
                     <br />
                        Coutanceau Fabien /
                        Losego Abel /
                        Bodo Maxence
                </div>
            </div>
            <img style={{width:'50%',wheight:'50%',display:'block',marginLeft:'auto',marginRight:'auto'}} src="https://upload.wikimedia.org/wikipedia/fr/2/2c/Universit%C3%A9_Panth%C3%A9on-Sorbonne_%28depuis_janvier_2015%29.svg" ></img>
        </>
    }>   
    </LayoutGlobal>
    );
}
export default About;

/* Crée un layout assez global avec une navbar ou autre élément présent sur chaque page qui est toujours présente et modifier  */
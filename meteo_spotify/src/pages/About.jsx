
import LayoutGlobal from '../Layout/LayoutGlobal';
import {AccessTokenContext} from '../Context/AccessTokenContext';
import React, {useContext} from 'react';
import { TraductionContext } from '../Context/TraductionContext';
import ButtonRedirection from '../components/Button/ButtonRedirection';
import { useHistory,Link } from "react-router-dom";

const About = () =>{
    return(   
    <LayoutGlobal children={   

        <>  
            <h1>About</h1> 
            <ButtonRedirection/>
        </>
    }>         
    </LayoutGlobal>
    );
}
export default About;

/* Crée un layout assez global avec une navbar ou autre élément présent sur chaque page qui est toujours présente et modifier  */
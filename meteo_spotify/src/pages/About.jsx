import React, {useContext} from 'react';
import LayoutGlobal from '../Layout/LayoutGlobal';
import {AccessTokenContext} from '../Context/AccessTokenContext';

const About = () =>{
    const {accessToken,authenticate} = useContext(AccessTokenContext);

    return(
    <LayoutGlobal children={
        <>
            <h1>About</h1> 
        </>
    }>         
    </LayoutGlobal>
    );
}
export default About;

/* Crée un layout assez global avec une navbar ou autre élément présent sur chaque page qui est toujours présente et modifier  */
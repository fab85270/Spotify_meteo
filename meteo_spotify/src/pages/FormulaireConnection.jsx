
import LayoutGlobal from '../Layout/LayoutGlobal';
import {AccessTokenContext} from '../Context/AccessTokenContext';
import {Link } from "react-router-dom";
import React, {useContext} from 'react';
import { TraductionContext } from '../Context/TraductionContext';

const FormulaireConnection = () =>{
    const {accessToken,isConnected,authenticate,disconect} = useContext(AccessTokenContext);
    const {traduction,traductionApp} = useContext(TraductionContext);

  
    return(   
    <LayoutGlobal children={   

        <>  
            <h1>coucou maggle</h1> 
        </>
    }>         
    </LayoutGlobal>
    );
}
export default FormulaireConnection;

/* Crée un layout assez global avec une navbar ou autre élément présent sur chaque page qui est toujours présente et modifier  */
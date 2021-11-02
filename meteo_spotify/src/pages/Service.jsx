
import LayoutGlobal from '../Layout/LayoutGlobal';
import React, {useContext} from 'react';
import { TraductionContext } from '../Context/TraductionContext';


const Service = () =>{
    return(
    <LayoutGlobal children={
        <>
           <h1>Service</h1>
        </>
    }>   
    </LayoutGlobal>
    );
}
export default Service;

/* Crée un layout assez global avec une navbar ou autre élément présent sur chaque page qui est toujours présente et modifier  */
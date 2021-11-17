import {useState,useContext} from 'react';
import {Button} from 'react-bootstrap';
import {TraductionContext } from '../../Context/TraductionContext';
import {AccessTokenContext} from '../../Context/AccessTokenContext';
import {BoutonContext} from '../../Context/BoutonContext';


function ButtonC({traduction,text,clickChange}){
   
    return (
        /* Incrémentation du compteur "clicked" avec +1 lorsque on effectue un click sur ce bouton */
        /* Lorsque de l'incrementation, on peut pas faire clicked++ car c'est une constante */
        <>
           <Button variant="outline-secondary" onClick={(event)=> clickChange(event)}>
                    {text}
            </Button>
        </>     
    )
}

export default ButtonC;
import LayoutGlobal from '../Layout/LayoutGlobal';
import React, {useContext, useState } from 'react';
import {AccessTokenContext} from '../Context/AccessTokenContext';
import { useHistory,Link } from "react-router-dom";
import PageMeteo from '../components/PageMeteo/PageMeteo';

const SpotiTherLayout = () =>{

    const {accessToken,isConnected,authenticate,disconect} = useContext(AccessTokenContext);
    let history = useHistory();


    if(!isConnected){ //Ne pas acceder a cette page si non connecté
        history.push("/");
    }

    /* Dans ce return, sera intégré le formulaire d'Abdel qui permet donc de saisir un code postal. */
    /*Ici on ne pourra insérer que des composants (lecture musique? création de playlist ? ) */
    return(
    <LayoutGlobal children={
        <>
            <h1>Les fonctionalités du site sont a venir</h1> 
            <PageMeteo></PageMeteo>
        </>
    }>         
    </LayoutGlobal>
    );
}
export default SpotiTherLayout;
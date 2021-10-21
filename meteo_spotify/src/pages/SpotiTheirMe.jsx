import LayoutGlobal from '../Layout/LayoutGlobal';
import React, {useContext, useState } from 'react';
import {AccessTokenContext} from '../Context/AccessTokenContext';
import { useHistory,Link } from "react-router-dom";

const SpotiTherLayout = () =>{

    const {accessToken,isConnected,authenticate,disconect} = useContext(AccessTokenContext);
    let history = useHistory();

    if(!isConnected){ //Ne pas acceder a cette page si non connecté
        history.push("/");
    }
    return(
    <LayoutGlobal children={
        <>
            <h1>Les fonctionalités du site sont a venir</h1> 
        </>
    }>         
    </LayoutGlobal>
    );
}
export default SpotiTherLayout;
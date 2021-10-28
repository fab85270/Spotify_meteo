import LayoutGlobal from '../Layout/LayoutGlobal';
import React, {useContext, useState,Component  } from 'react';
import {AccessTokenContext} from '../Context/AccessTokenContext';
import { useHistory,Link } from "react-router-dom";
import PageMeteo from '../components/PageMeteo/PageMeteo';
import { TraductionContext } from '../Context/TraductionContext';
import { SpotifyApiContext, Artist } from 'react-spotify-api';


const SpotiTherLayout = () =>{

    const {accessToken,isConnected,authenticate,disconect} = useContext(AccessTokenContext);
    const {traduction,traductionApp} = useContext(TraductionContext);
    let history = useHistory();


    if(!isConnected){ //Ne pas acceder a cette page si non connecté
        history.push("/");
    }

    /* Dans ce return, sera intégré le formulaire d'Abdel qui permet donc de saisir un code postal. */
    /*Ici on ne pourra insérer que des composants (lecture musique? création de playlist ? ) */
    return(
    <LayoutGlobal children={
        <>
            <strong>
                <h1>
                    {!traduction && "Bienvenue dans l'application SpotiTheirMe"}
                    {traduction && "Welcome to the SpotiTheirMe Application"}
                </h1>
            </strong>
            <br></br>
            <SpotifyApiContext.Provider value={props.token}>
      <Artist id={props.id}>
        {({ data, loading, error }) =>
          data ? (
            <div>
              <h1>{data.name}</h1>
              <ul>
                {data.genres.map(genre => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>
          ) : null
        }
      </Artist>
    </SpotifyApiContext.Provider>
        </>
    }>         
    </LayoutGlobal>
    );
}
export default SpotiTherLayout;
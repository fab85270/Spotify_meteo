import LayoutGlobal from '../Layout/LayoutGlobal';
import React, {useContext, useState } from 'react';
import {AccessTokenContext} from '../Context/AccessTokenContext';
import { useHistory,Link } from "react-router-dom";
import Form_research from '../components/Form_research/Form_research';
import { TraductionContext } from '../Context/TraductionContext';
import axios from 'axios';

const SpotiTherLayout = () =>{

    const {accessToken,isConnected,authenticate,disconect} = useContext(AccessTokenContext);
    const {traduction,traductionApp} = useContext(TraductionContext);
    const [searchTerm, setSearchTerm] = useState('');
    let history = useHistory();


    if(!isConnected){ //Ne pas acceder a cette page si non connecté
        history.push("/");
    }

    /* Dans ce return, sera intégré le formulaire d'Abdel qui permet donc de saisir un code postal. */
    /*Ici on ne pourra insérer que des composants (lecture musique? création de playlist ? ) */

    /* Obtention des informations liées  */

    const handleInputChange = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
    };

  /* Afin de pouvoir effectuer la requête d'obtention de données à l'API spotify */

  const get = async (url, params) => {
    const result = await axios.get(url, params);
    return result.data;
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    /* Definition du paramètre par defaut pour toutes les connexions : faire celui de deconnection quand on se deco avec delete ?*/

    try{//Afin de pouvoir capter une eventuelle erreur de connexion
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${accessToken}`;
    } catch(error){
      throw new Error(error);
    }


    /* Définition de l'url auquelle on désire accéder */
    const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
        searchTerm
      )}&type=album,playlist,artist`;

      console.log("Verification URL" + API_URL);

      /* On va rechercher les données associées à notre URL à l'API spotify grâce à notre accessToken */
    console.log("test" + searchTerm);
    
    const result = await get(API_URL);

    console.log(result);

    const { albums, artists, playlists } = result;

    /*Afin de voir combien d'albums/items on a */
    console.log(albums.items);

  
  };


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
            <Form_research
                handleSearch={handleSearch}
                handleInputChange={handleInputChange}
                value={searchTerm}
            >
            </Form_research>
            
        </>
    }>         
    </LayoutGlobal>
    );
}
export default SpotiTherLayout;
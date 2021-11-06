import LayoutGlobal from '../Layout/LayoutGlobal';
import React, {useContext, useState } from 'react';
import {AccessTokenContext} from '../Context/AccessTokenContext';
import { useHistory } from "react-router-dom";
import Form_research from '../components/Form_research/Form_research';
import { TraductionContext } from '../Context/TraductionContext';
import ListAlbums from '../components/ListAlbums/ListAlbums';
import ListArtistes from '../components/ListArtistes/ListArtistes';
import Form_CP from '../components/Form_CP/Form_CP';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ajouter le boostrap au sein de l'application
import Table from 'react-bootstrap/Table';

const SpotiTherLayout = () =>{

    /* Utilisation des hooks(états/contexts) */

    const {accessToken,isConnected,authenticate,disconect} = useContext(AccessTokenContext);
    const {traduction,traductionApp} = useContext(TraductionContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [albumsState, setAlbums] = useState(''); //Objet des albums obtenus suite à une requête sur l'API Spotify.
    const [artistesState, setArtistes] = useState(''); //Objet des artistes obtenus suite à une requête sur l'API Spotify.
    const [playlistsState, setPlaylists] = useState(''); //Objet des artistes obtenus suite à une requête sur l'API Spotify.
    let history = useHistory();//Pour redirection entre pages de


    if(!isConnected){ //Ne pas acceder a cette page si non connecté
        history.push("/");
    }

    /* Méthode chargée de la saisie dans la barre texte */

    const handleInputChange = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
    };

  /* Méthode chargée de l'obtention de données de l'API spotify selon l'URL/requête et l'accessToken généré*/

    const get = async (url) => {
      try {
        const response = await fetch(url,{
          method:'GET',
          headers:{
            'Authorization': 'Bearer '+accessToken
          }
        });

        /* On transforme la reponse obtenue en object comprenant les objets (Artistes/Albums..Playlist) en json*/

        return await response.json();

      } catch(Error){
        throw new Error(Error); //Faire un composant qui permet de personaliser les pages d'erreur (404 ou quoi..)
      }
    };


    const handleSearch = async (event) => {
        event.preventDefault();

      /* Définition de l'url auquelle on désire accéder */
      const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
          searchTerm
        )}&type=album,playlist,artist`;


      /* Récupération sous forme d'objet d'objet des données obtenues suite à notre requête */
      
      const response = await get(API_URL);
      const { albums, artists, playlists } = response;
    
      /* Les données des objets associés (albums/artistes/playlist) sont placés au sein de hook pour pouvoir être manipulés */

      setAlbums(albums);
      setArtistes(artists);
      setPlaylists(playlists);
  };

    const recupererMusiqueMeteo = () =>{

    }
    const recupererCP = () =>{

    }

    return(
    <LayoutGlobal children={
        <>
            <strong>
                <h1>
                    {!traduction && "Bienvenue dans l'application SpotiTheirMe"}
                    {traduction && "Welcome to the SpotiTherMe Application"}
                </h1>
            </strong>
            <br/>
            <Table>
              <tbody>
                <tr>
                  <td>
                    <Form_research
                        handleSearch={handleSearch}
                        handleInputChange={handleInputChange}
                        value={searchTerm}
                    >
                    </Form_research>
                  </td>
                  <td>
                    <Form_CP
                     checkSubmit={recupererMusiqueMeteo}
                     checkChange={recupererCP}
                    >
                    </Form_CP>
                  </td>
                </tr>
              </tbody>
            </Table>
            <table>
                <td>
                  <ListAlbums
                    albums={albumsState}
                  >
                  </ListAlbums>
                </td>
                <td>
                  <ListArtistes
                  artists = {artistesState}>
                  </ListArtistes>
                </td>
             </table>
        </>
    }>         
    </LayoutGlobal>
    );
}
export default SpotiTherLayout;
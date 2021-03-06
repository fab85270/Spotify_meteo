import LayoutGlobal from '../Layout/LayoutGlobal';
import React, {useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ajouter le boostrap au sein de l'application
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './SpotiTheirMe.css';

import {AccessTokenContext} from '../Context/AccessTokenContext';
import {BoutonContext} from '../Context/BoutonContext';
import {TraductionContext } from '../Context/TraductionContext';
import {MeteoContext} from '../Context/MeteoContext';

import Form_research from '../components/Form_research/Form_research';
import ListAlbums from '../components/ListAlbums/ListAlbums';
import ListArtistes from '../components/ListArtistes/ListArtistes';
import ListPlaylist from '../components/ListPlaylist/ListPlaylist';
import Form_CP from '../components/Form_CP/Form_CP';
import DisplayMeteo from '../components/DisplayMeteo/DisplayMeteo';


const SpotiTherLayout = () =>{

    /* Utilisation des hooks pour
      La duree de connexion
      La traduction
      L application meteo
      la recherche de Playlist/Album/Auteur
    */

    const {accessToken,isConnected,timeOutSession,authenticate,disconect,setTimeOutSession} = useContext(AccessTokenContext);
    const {traduction,traductionApp} = useContext(TraductionContext);
    const{codePostal,nomVille,numTemps,intituleMeteo,cpErreur,changeContexte,authenticateCP,setCPErreur} = useContext(MeteoContext);
    const {clicked,changeContexteBouton} = useContext(BoutonContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [albumsState, setAlbums] = useState({}); //Objet des albums obtenus suite à une requête sur l'API Spotify.
    const [artistesState, setArtistes] = useState(''); //Objet des artistes obtenus suite à une requête sur l'API Spotify.
    const [playlistsState, setPlaylists] = useState(''); //Objet des artistes obtenus suite à une requête sur l'API Spotify.
    const [display,setDisplay] = useState('Albums'); //Afin de gérer l'affichage entre albums/artistes & playlist
    let history = useHistory();
    const [cp, setCP] = useState(""); 
  
    //Empeche l'acces a la page si non connecte
    //(Si l utilisateur essaye de se connecter via URL)
    if(!isConnected){ 
        history.push("/");
    }else {
      //Si la session de l utilisateur est finie il est renvoye
      //Vers la page de deconnexion
      if(timeOutSession){
        disconect();
        changeContexteBouton()
        setTimeOutSession(false);
        history.push("/disconnectPage");
      }
    }
     
    /*  Méthode chargée de définir une url selon un mot clé 
        pour la recherche d'album/playlist/artiste
    */
    const getUrl = (searchTerm) =>{
      return `https://api.spotify.com/v1/search?query="${encodeURIComponent(
          searchTerm
        )}"&type=album,playlist,artist`;
    }

    /*  Méthode chargée de définir une url selon un mot clé 
        pour la recherche de playlist en fonction de la meteo
    */
    const getUrlMusiqueMeteo = (searchTerm) =>{
      return `https://api.spotify.com/v1/search?query="${encodeURIComponent(
        searchTerm
      )}"&type=playlist`;
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
    const affichage = (response,isPlaylistMeteo)=>{

      if(!isPlaylistMeteo){
        const { albums, artists, playlists } = response;
        setAlbums(albums);
        setArtistes(artists);
        setPlaylists(playlists);
      } else{
        setPlaylists(response);    
        setAlbums({}); 
        setArtistes({});        
      }
    }
    

    const handleSearch = async (event) => {
        event.preventDefault();


        
      /* Définition de l'url auquelle on désire accéder */
      const API_URL = getUrl(searchTerm);

      /* Récupération sous forme d'objet d'objet des données obtenues suite à notre requête */
      const response = await get(API_URL);

      /* Les données des objets associés (albums/artistes/playlist) sont placés au sein de hook pour pouvoir être manipulés */
      affichage(response,false);
  };


    /* Méthode chargée de l'obtention des playlists selon le codePostal saisit et le temps associé */
    const getPlaylistMeteo = async (keyword) =>{

      /* Définition de l'URL selon le mot clé associé au temps météo du CP renseigné */
      const API_URL = getUrlMusiqueMeteo(keyword);

      const response = await get(API_URL);
      const {playlists} = response; //Obtention de toutes les playlists associées à ce mot clé

      return playlists;
     
    }


    /*Chargé de recuperer le code postal*/
    const recupererCPSpoti = (event) =>{
      setCP(event.target.value);
    }

    /* Méthode chargée de récupérer la musique associée à la méteo du code postal saisit */
    const recupererMusiqueMeteo = async (event) =>{
            event.preventDefault();
    try {      
        const numT = await authenticateCP(cp);
        /* Définition d'une URL selon le temps obtenu */
        switch (numT){
          case 0: 
              //Soleil
              const playlistsSoleil = await getPlaylistMeteo("Sunny Day");
              playlistsSoleil.items = playlistsSoleil.items.filter(item => item.name === "sunny day" || item.name === "Sunny Day");             
              affichage(playlistsSoleil,true);  
              break;
          case 10: case 11: case 12: case 13: case 14: case 15: case 16: case 140: case 141: case 210: case 211: case 212: case 230: case 231: case 232:
              //Pluie
              const playlistsPluie = await getPlaylistMeteo("Rainy Day");
              playlistsPluie.items = playlistsPluie.items.filter(item => item.name === "Rainy Day" || item.name === "Rainy Day Vibes" || item.name === "Rainy Day Jazz");             
              affichage(playlistsPluie,true);  
              break;
          case 1: case 2: case 3: case 4: case 5:
              //Nuageux
              const playlistsNuageux = await getPlaylistMeteo("Cloudy Day");
              const playlistFilter = playlistsNuageux.items.filter(item => item.name === "cloudy days" || item.name === "Cloudy Days" || item.name === "cloudy fall days");             
              playlistsNuageux.items = playlistFilter;
              affichage(playlistsNuageux,true);   
              break;
          case 100: case 101: case 102: case 103: case 104: case 105: case 106: case 107: case 108: case 120: case 121: case 122: case 123: case 124: case 125: case 126: case 127: case 128: case 130: case 131: case 132: case 133: case 134: case 135: case 136: case 137: case 138:
              //Orage
              const playlistsOrage= await getPlaylistMeteo("Thunderstorm Music");
              playlistsOrage.items = playlistsOrage.items.filter(item => item.name === "Thunderstorm Music");
              affichage(playlistsOrage,true);  
              break;
          case 20: case 21: case 22: case 30: case 31: case 32: case 142: case 220: case 221: case 222: case 235:
              //Neige
              const playlistsNeige= await getPlaylistMeteo("lofi beats");
              playlistsNeige.items = playlistsNeige.items.filter(item => item.name === "lofi beats" || item.name === "Lofi Beats" || item.name === "Lofi Beats 2021");
              affichage(playlistsNeige,true);  
              break;
          case 6: case 7:
              //Brouillard
              const playlistsBrouillard= await getPlaylistMeteo("Foggy");
              playlistsBrouillard.items = playlistsBrouillard.items.filter(item => item.name === "foggy forest vibes" || item.name === "Foggy Mornings" || item.name === "foggy days");
              affichage(playlistsBrouillard,true); 
              break;
          case 40: case 41: case 42: case 43: case 44: case 45: case 46: case 47: case 48: case 60: case 61: case 62: case 63: case 64: case 65: case 66: case 67: case 68: case 70: case 71: case 72: case 73: case 74: case 75: case 76: case 77: case 78:
              //averse
              const playlistsAverses= await getPlaylistMeteo("downtown blues");
              playlistsAverses.items = playlistsAverses.items.filter(item => item.name === "downtown Blues" || item.name === "Downtown Blues");
              affichage(playlistsAverses,true); 
              break;
          default:
              console.log("Le numéro de météo retourné ne peut être considéré");
              break;
          } 
        }
        catch(Error){ //Cas d'une saisie invalide d'un code postal
            console.log("erreur");
        }
    }
    return(
    <LayoutGlobal children={
        <div className="testTrucMachin">
          <div className="partieHaute">
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
                  {cpErreur &&
                    <p>
                      <strong>
                        {traduction && "Entry error: Please enter a valid postal code"}
                        {!traduction && " Erreur saisie : Veuillez saisir un code postal valide"}
                      </strong>
                    </p>
                  } 
                    <Form_CP
                     checkSubmit={recupererMusiqueMeteo}
                     checkChange={recupererCPSpoti}
                    >
                    </Form_CP>
                    <DisplayMeteo/>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="partieBasse">
              <table className="showTableau">
                <thead>
                  <tr className="showPlaylist">
                    <th colspan="3">
                    <div className ="boutonChoixDisplay">
            
                      {Object.keys(albumsState).length > 0 && (
                        <Button variant="secondary"  size="lg"
                        className={`${
                          display === 'Albums' ? 'btn active' : 'btn'
                        }`}
                        onClick={() => setDisplay('Albums')}
                      >
                        Albums
                      </Button>
                      )}
                      {Object.keys(artistesState).length > 0 && (
                        <Button variant="secondary" size="lg"
                        className={`${
                          display === 'Artists' ? 'btn active' : 'btn'
                        }`}
                        onClick={() => setDisplay('Artists')}
                      >
                        {traduction && "Artists"}
                        {!traduction && "Artistes"}
                      </Button>
                      )}
                      {Object.keys(playlistsState).length > 0 && (
                        <Button variant="secondary"  size="lg"
                        className={`${
                          display === 'Playlists' ? 'btn active' : 'btn'
                        }`}
                        onClick={() => setDisplay('Playlists')}
                      >
                        Playlists
                      </Button>
                      )}
                    </div>
                    </th>
                  </tr>
                </thead>
                  <td className="showList">
                    <div className="displayAlbums">
                      {display == "Albums" && <ListAlbums albums={albumsState}/>} 
                    </div>
                  </td>
                  <td className="showList">
                    <div className="displayArtistes">
                      {display == "Artists" && <ListArtistes artists={artistesState}/>}
                    </div>
                  </td>
                  <td className="showList">
                    <div className="displayPlaylist">
                      {display == "Playlists" && <ListPlaylist playlist={playlistsState}/>}
                    </div>
                  </td>
              </table>
            </div>
        </div>
    }>         
    </LayoutGlobal>
    );
}
export default SpotiTherLayout;
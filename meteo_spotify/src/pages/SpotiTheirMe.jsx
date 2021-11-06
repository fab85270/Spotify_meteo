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
    const [cp, setCP] = useState(""); 
    const [cities,setCities] = useState([]);
    const [insee, setInsee] = useState("");


    if(!isConnected){ //Ne pas acceder a cette page si non connecté
        history.push("/");
    }

    /* Definition de la constante WEATHER ( à voir avec le prof comment factoriser ceci) */
    const WEATHER = {
      0 : "Soleil",
      1 : "Peu nuageux",
      2 : "Ciel voilé",
      3 : "Nuageux",
      4 : "Très nuageux",
      5 : "Couvert",
      6 : "Brouillard",
      7 : "Brouillard givrant",
      10 : "Pluie faible",
      11 : "Pluie modérée",
      12 : "Pluie forte",
      13 : "Pluie faible verglaçante",
      14 : "Pluie modérée verglaçante",
      15 : "Pluie forte verglaçante",
      16 : "Bruine",
      20 : "Neige faible",
      21 : "Neige modérée",
      22 : "Neige forte",
      30 : "Pluie et neige mêlées faibles",
      31 : "Pluie et neige mêlées modérées",
      32 : "Pluie et neige mêlées fortes",
      40 : "Averses de pluie locales et faibles",
      41 : "Averses de pluie locales",
      42 : "Averses locales et fortes",
      43 : "Averses de pluie faibles",
      44 : "Averses de pluie",
      45 : "Averses de pluie fortes",
      46 : "Averses de pluie faibles et fréquentes",
      47 : "Averses de pluie fréquentes",
      48 : "Averses de pluie fortes et fréquentes",
      60 : "Averses de neige localisées et faibles",
      61 : "Averses de neige localisées",
      62 : "Averses de neige localisées et fortes",
      63 : "Averses de neige faibles",
      64 : "Averses de neige",
      65 : "Averses de neige fortes",
      66 : "Averses de neige faibles et fréquentes",
      67 : "Averses de neige fréquentes",
      68 : "Averses de neige fortes et fréquentes",
      70 : "Averses de pluie et neige mêlées localisées et faibles",
      71 : "Averses de pluie et neige mêlées localisées",
      72 : "Averses de pluie et neige mêlées localisées et fortes",
      73 : "Averses de pluie et neige mêlées faibles",
      74 : "Averses de pluie et neige mêlées",
      75 : "Averses de pluie et neige mêlées fortes",
      76 : "Averses de pluie et neige mêlées faibles et nombreuses",
      77 : "Averses de pluie et neige mêlées fréquentes",
      78 : "Averses de pluie et neige mêlées fortes et fréquentes",
      100 : "Orages faibles et locaux",
      101 : "Orages locaux",
      102 : "Orages fort et locaux",
      103 : "Orages faibles",
      104 : "Orages",
      105 : "Orages forts",
      106 : "Orages faibles et fréquents",
      107 : "Orages fréquents",
      108 : "Orages forts et fréquents",
      120 : "Orages faibles et locaux de neige ou grésil",
      121 : "Orages locaux de neige ou grésil",
      122 : "Orages locaux de neige ou grésil",
      123 : "Orages faibles de neige ou grésil",
      124 : "Orages de neige ou grésil",
      125 : "Orages de neige ou grésil",
      126 : "Orages faibles et fréquents de neige ou grésil",
      127 : "Orages fréquents de neige ou grésil",
      128 : "Orages fréquents de neige ou grésil",
      130 : "Orages faibles et locaux de pluie et neige mêlées ou grésil",
      131 : "Orages locaux de pluie et neige mêlées ou grésil",
      132 : "Orages fort et locaux de pluie et neige mêlées ou grésil",
      133 : "Orages faibles de pluie et neige mêlées ou grésil",
      134 : "Orages de pluie et neige mêlées ou grésil",
      135 : "Orages forts de pluie et neige mêlées ou grésil",
      136 : "Orages faibles et fréquents de pluie et neige mêlées ou grésil",
      137 : "Orages fréquents de pluie et neige mêlées ou grésil",
      138 : "Orages forts et fréquents de pluie et neige mêlées ou grésil",
      140 : "Pluies orageuses",
      141 : "Pluie et neige mêlées à caractère orageux",
      142 : "Neige à caractère orageux",
      210 : "Pluie faible intermittente",
      211 : "Pluie modérée intermittente",
      212 : "Pluie forte intermittente",
      220 : "Neige faible intermittente",
      221 : "Neige modérée intermittente",
      222 : "Neige forte intermittente",
      230 : "Pluie et neige mêlées",
      231 : "Pluie et neige mêlées",
      232 : "Pluie et neige mêlées",
      235 : "Averses de grêle",
  }
    /* Méthode chargée de définir une url selon un mot clé */

    const getUrl = (searchTerm) =>{
      return `https://api.spotify.com/v1/search?query=${encodeURIComponent(
          searchTerm
        )}&type=album,playlist,artist`;
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
    const affichage = (response)=>{

      const { albums, artists, playlists } = response;

      setAlbums(albums);
      setArtistes(artists);
      setPlaylists(playlists);
    }
    

    const handleSearch = async (event) => {
        event.preventDefault();

        
      /* Définition de l'url auquelle on désire accéder */
      const API_URL = getUrl(searchTerm);

      /* Récupération sous forme d'objet d'objet des données obtenues suite à notre requête */
      
      const response = await get(API_URL);
      const { albums, artists, playlists } = response;
    
      /* Les données des objets associés (albums/artistes/playlist) sont placés au sein de hook pour pouvoir être manipulés */

      affichage(response);
  };
    const recupererCPSpoti = (event) =>{
      setCP(event.target.value);
    }


    const recupererMusiqueMeteo = async (event) =>{
      event.preventDefault();

    try {
      const responseCP = await fetch('https://api.meteo-concept.com/api/location/cities?token=75f4db03b57d18224268961147be7dbb75239b391add7a75f4b31cbd28afa58e&search='+ cp);

            
        /* Définition de l'insee de la ville afin de pouvoir obtenir la météo selon la ville saisie */
            const catFacts = await responseCP.json();
            setInsee(catFacts.cities[0].insee);

            console.log("essai");
            console.log(catFacts.cities);
            console.log("fin essai");

          /* Parcourt de toutes les villes associées à un code postal */

            for(var item in catFacts.cities){
              setCities(cities.push(catFacts.cities[item]));
            }
           
        
            
        /* Obtention des données météo selon la ville renseignée */
            const response = await fetch('https://api.meteo-concept.com/api/forecast/nextHours?token=75f4db03b57d18224268961147be7dbb75239b391add7a75f4b31cbd28afa58e&insee='+ insee);
            const donneesMeteo = await response.json();

        /* Définition d'une URL selon le temps obtenu */
        console.log("HHHEHEHEHEHHE"+donneesMeteo.forecast[0].weather);
        console.log("coucou21");
        console.log(donneesMeteo.forecast);
        console.log("coucou11");


        switch (donneesMeteo.forecast[0].weather){
          case 0: case 1: case 2:
              //Soleil
              break;
          case 10: case 11: case 12: case 13: case 14: case 15: case 16: case 140: case 141: case 210: case 211: case 212: case 230: case 231: case 232:
              //Pluie
              break;
          case 3: case 4: case 5:
              //Nuageux
              console.log("tets");
              const API_URL = getUrl("SCH");
              const response = await get(API_URL);
              console.log(response);
              affichage(response);
              break;
          case 100: case 101: case 102: case 103: case 104: case 105: case 106: case 107: case 108: case 120: case 121: case 122: case 123: case 124: case 125: case 126: case 127: case 128: case 130: case 131: case 132: case 133: case 134: case 135: case 136: case 137: case 138:
              //Orage
              break;
          case 20: case 21: case 22: case 30: case 31: case 32: case 142: case 220: case 221: case 222: case 235:
              //Neige
              break;
          case 6: case 7:
              //Brouillard
              break;
          case 40: case 41: case 42: case 43: case 44: case 45: case 46: case 47: case 48: case 60: case 61: case 62: case 63: case 64: case 65: case 66: case 67: case 68: case 70: case 71: case 72: case 73: case 74: case 75: case 76: case 77: case 78:
              //averse
              break;
          default:
              console.log("coucou22");
              break;
          } 
        }

        catch(Error){ //Cas d'une saisie invalide d'un code postal
            console.log("invalid hehe");
        }
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
                     checkChange={recupererCPSpoti}
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
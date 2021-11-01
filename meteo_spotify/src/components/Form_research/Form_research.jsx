import React, { useState, useContext} from 'react';
import { Form, Button } from 'react-bootstrap';
import {AccessTokenContext} from '../../Context/AccessTokenContext';
import { Card } from 'react-bootstrap';
import axios from 'axios';

const SearchForm = () => {

  /* Utilisation de hooks */
  const [searchTerm, setSearchTerm] = useState('');
  const {accessToken,isConnected,authenticate,disconect} = useContext(AccessTokenContext);

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

    setAlbumEssai(albums);
  };

  const coucou = () =>{
  console.log(albumsEssai);
  }

  return (
    <div className="Form_research">
      <Form onSubmit={handleSearch}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter search term</Form.Label>
          <Form.Control
            type="search"
            name="searchTerm"
            value={searchTerm}
            placeholder="Search for album, artist or playlist"
            onChange={handleInputChange}
            autoComplete="off"
          />
        </Form.Group>
        <Button variant="info" type="submit">
          Search
        </Button>
      </Form>
    </div>

  );
};

export default SearchForm;

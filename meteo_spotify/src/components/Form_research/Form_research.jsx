import React, { useState, useContext} from 'react';
import { Form, Button } from 'react-bootstrap';
import {AccessTokenContext} from '../../Context/AccessTokenContext';
import axios from 'axios';

const SearchForm = () => {

  /* Utilisation de hooks */
  const [searchTerm, setSearchTerm] = useState('');
  const {accessToken,isConnected,authenticate,disconect} = useContext(AccessTokenContext);

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    /* Connexion à l'API Spotify selon l'AccessToken */

    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${accessToken}`;

    console.log("test");

    /* Définition de l'url auquelle on désire accéder */
    const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
        searchTerm
      )}&type=album,playlist,artist`;

      /* On va rechercher les données associées à notre URL à l'API spotify grâce à notre accessToken */

    const result = await axios.get(url, params);

  };

  return (
    <div>
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

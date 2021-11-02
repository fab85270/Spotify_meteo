import React, { useState, useContext} from 'react';
import { Form, Button } from 'react-bootstrap';
import { TraductionContext } from '../../Context/TraductionContext';


const SearchForm = ({value,handleSearch,handleInputChange}) => {

  /* Utilisation du hooks(context) */

  const {traduction,traductionApp} = useContext(TraductionContext);

  return (
    <div className="Form_research">
      <Form onSubmit={(event)=> handleSearch(event)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            {traduction && "Enter search term"}
            {!traduction && "Entrer votre mot clé de recherche"}
          </Form.Label>
          <Form.Control
            type="search"
            name="searchTerm"
            value={value}
            placeholder={traduction && "Search for album, artist & playlist" || !traduction && "Rechercher votre album,artistes & playlist"}
            onChange={(event)=> handleInputChange(event)}
            autoComplete="off"
          />
        </Form.Group>
        <Button variant="info" type="submit">
          {traduction && "Search"}
          {!traduction && "Rechercher"}
        </Button>
      </Form>
    </div>

  );
};

export default SearchForm;

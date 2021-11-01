import React, { useState, useContext} from 'react';
import { Form, Button } from 'react-bootstrap';


const SearchForm = ({value,handleSearch,handleInputChange}) => {

  return (
    <div className="Form_research">
      <Form onSubmit={(event)=> handleSearch(event)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter search term</Form.Label>
          <Form.Control
            type="search"
            name="searchTerm"
            value={value}
            placeholder="Search for album, artist or playlist"
            onChange={(event)=> handleInputChange(event)}
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

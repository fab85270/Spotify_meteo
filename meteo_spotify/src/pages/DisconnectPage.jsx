import Alert from 'react-bootstrap/Alert'
import {TraductionContext } from '../Context/TraductionContext';
import React, {useContext} from 'react';
import Button from 'react-bootstrap/Button'
import { useHistory} from "react-router-dom";


const DisconnectPage = () => {

    const {traduction,traductionApp} = useContext(TraductionContext);
    let history = useHistory();
    console.log("La traduction est de : "+traduction);

    return (
        <Alert variant="warning"  dismissible>
          <Alert.Heading>WARNING</Alert.Heading>
          <p>
            {traduction && "Your session has expired. Please log in again"}
            {!traduction && "Votre session vient d'être expirée. Veuillez vous enregistrer de nouveau"}
          </p>
          <Button variant="danger" onClick={() => history.push('/')}>
              {traduction && "Cancel"}
              {!traduction && "Quitter"}
          </Button>
          <Button variant="success" onClick={() => history.push('/connectAPI')}>
              {traduction && "Connect"}
              {!traduction && "Se connecter"}
          </Button>
        </Alert>
      );
}
export default DisconnectPage;
import Alert from 'react-bootstrap/Alert'
import {TraductionContext } from '../Context/TraductionContext';
import React, {useContext} from 'react';
import Button from 'react-bootstrap/Button'
import { useHistory} from "react-router-dom";
import {AccessTokenContext} from '../Context/AccessTokenContext';



const DisconnectPage = () => {

    /* Use context utile à la traduction et pour la page de deconnexion*/
    const {traduction,traductionApp} = useContext(TraductionContext);
    const {isConnected} = useContext(AccessTokenContext);
    let history = useHistory();

    if(!isConnected){ 
      history.push("/");
    }

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
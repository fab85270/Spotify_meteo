import Alert from 'react-bootstrap/Alert'
import React, {useContext} from 'react';
import Button from 'react-bootstrap/Button'
import { useHistory} from "react-router-dom";


const DisconnectPage = () => {

    let history = useHistory();

    return (
        <Alert variant="warning"  dismissible>
          <Alert.Heading>WARNING</Alert.Heading>
          <p>

              Votre session vient d'être expirée. Veuillez vous enregistrer de nouveau
          </p>
          <Button variant="danger" onClick={() => history.push('/')}>
              Quitter

          </Button>
          <Button variant="success" onClick={() => history.push('/connectAPI')}>
            Connecter

          </Button>
        </Alert>
      );
}
export default DisconnectPage;
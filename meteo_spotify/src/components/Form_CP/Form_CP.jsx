import React, {useContext} from 'react';
import { Form, Button } from 'react-bootstrap';
import { TraductionContext } from '../../Context/TraductionContext';
import './style.css'




const Form_CP = ({checkSubmit,checkChange}) => {

  /* Utilisation du context traduction */
    const {traduction,traductionApp} = useContext(TraductionContext);

    return (
      <div className="Form_CP">
        <form class="CP_Meteo" onSubmit={(event)=> checkSubmit(event)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>
              {!traduction && "Code postale Ville ou Nom de la ville"}
              {traduction && "Street PostCode or name street"}
            </Form.Label> 
            <Form.Control
              type = "search"
              name = "searchCP"
              placeHolder={traduction && "Please enter your PostCode" || !traduction && "Veuillez renseigner votre code postal"}
              onChange={(event)=> checkChange(event)}
              autocomplete="off"
              required pattern="[0-9]{5}|[A-Z]*[a-z]*"
            />
          </Form.Group>
            <div>
              <Button variant="info" type="submit">
                  {traduction && "Submit"}
                  {!traduction && "Envoyer"}
              </Button>
            </div>
        </form>
      </div>
    );
  }
export default Form_CP;

import React, {useContext} from 'react';
import DropDown from '../DropDown/DropDown';
import { TraductionContext } from '../../Context/TraductionContext';
import { useHistory,Link } from "react-router-dom";

const Form_Connect = (checkSub) =>{

    /* Utilisation du context traduction */
    const {traduction,traductionApp} = useContext(TraductionContext);
    let history = useHistory();

    const annuler = () =>{
      history.push("/");
    }

    return (
        <form onSubmit={(event)=> checkSub(event)}>
            <label>
                {!traduction && "Merci de choisir votre compte de connexion"}
                {traduction && "Please choose your login account"}
                <br/>
                <DropDown/>
                <br/>
            </label>
          <input type="submit" value={!traduction && "Envoyer" || traduction && "Submit"} />
          <button onClick={() => annuler()} className="AnnulerConnection"> 
              {!traduction && "Annuler"}
              {traduction && "Cancel"}
          </button>
        </form>
      );
}

export default Form_Connect;
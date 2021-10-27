import React, {useContext} from 'react';
import DropDown from '../DropDown/DropDown';
import { TraductionContext } from '../../Context/TraductionContext';

const Form_Connect = () =>{

    /* Utilisation du context traduction */
    const {traduction,traductionApp} = useContext(TraductionContext);

    return (
        <form>
            <label>
                {!traduction && "Se Connecter"}
                {traduction && "PostCode"}
                <DropDown></DropDown>
            </label>
          <input type="submit" value={!traduction && "Envoyer" || traduction && "Submit"} />
        </form>
      );
}

export default Form_Connect;
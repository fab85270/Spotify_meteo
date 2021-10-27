import React, {useContext} from 'react';
import { TraductionContext } from '../../Context/TraductionContext';





const Form_CP = ({value,checkSubmit,checkChange}) => {

  /* Utilisation du context traduction */
    const {traduction,traductionApp} = useContext(TraductionContext);

    return (
      <form onSubmit={(event)=> checkSubmit(event)}>
        <label>
          {!traduction && "Code postale"}
          {traduction && "PostCode"}
          <input type="text" value={value} onChange={(event)=> checkChange(event)} />
        </label>
        <input type="submit" value={!traduction && "Envoyer" || traduction && "Submit"} />
      </form>
    );
  }
export default Form_CP;

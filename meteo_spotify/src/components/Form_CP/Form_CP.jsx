import React, {useContext} from 'react';
import { TraductionContext } from '../../Context/TraductionContext';
import './style.css'




const Form_CP = ({value,checkSubmit,checkChange}) => {

  /* Utilisation du context traduction */
    const {traduction,traductionApp} = useContext(TraductionContext);

    return (
      
      <form class="meteo" onSubmit={(event)=> checkSubmit(event)}>
        <div>
        <label>
          {!traduction && "Code postale"}
          {traduction && "PostCode"}
          <input type="text" value={value} onChange={(event)=> checkChange(event)} />
        </label>
        </div> 
        <div>
        <input type="submit" value={!traduction && "Envoyer" || traduction && "Submit"} />
        </div>
      </form>
    );
  }
export default Form_CP;

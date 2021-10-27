import React, {useContext,useState} from 'react';
import DropDown from '../DropDown/DropDown';
import { TraductionContext } from '../../Context/TraductionContext';
import { useHistory,Link } from "react-router-dom";

const Form_Connect = ({checkSub}) =>{

  /* Définition des valeurs dans le dropdown */
    const data = [
      {value:1, name: 'Maxence'},
      {value:2, name: "Abel"},
      {value:3, name: "Fabien"},
    ];

    /* Utilisation du context traduction */
    const {traduction,traductionApp} = useContext(TraductionContext);
    const[selectedValue,setSelectedValue] = useState("1");
    let history = useHistory();

    const annuler = () =>{
      history.push("/");
    }

    return (
        <form onSubmit={(event)=> checkSub(event)}>
            <label>
                {!traduction && "Merci de choisir votre compte de connexion"}
                {traduction && "Please choose your login account"}
                <div>
                    <select value={selectedValue} onChange={e => setSelectedValue(e.target.value)}>
                      {data.map((item,idx) => <option key ={idx} value={item.value}>{item.name}</option>)}
                    </select>
                    <p>{selectedValue}</p>
                </div>
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
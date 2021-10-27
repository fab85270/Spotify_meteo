import React, {useContext,useState} from 'react';
import DropDown from '../DropDown/DropDown';
import { TraductionContext } from '../../Context/TraductionContext';
import { useHistory,Link } from "react-router-dom";

const Form_Connect = ({value,checkSub,checkChange}) =>{

  /* Définition des valeurs dans le dropdown */
    const data = [
      {value:1, name: 'Maxence'},
      {value:2, name: "Abel"},
      {value:3, name: "Fabien"},
    ];

    /* Utilisation du context traduction */
    const {traduction,traductionApp} = useContext(TraductionContext);


    /* Afin de rediriger vers de nouvelles pages */
    let history = useHistory();

    /* Méthode gestion annulation saisie formulaire */
    const annuler = () =>{
      history.push("/");
    }

    /** onChange={e => setSelectedValue(e.target.value) */

    return (
        <form onSubmit={(event)=> checkSub(event)}>
            <label>
                {!traduction && "Merci de choisir votre compte de connexion"}
                {traduction && "Please choose your login account"}
                <div>
                    <select value={value} onChange={(event)=> checkChange(event)}>
                      {data.map((item,idx) => <option key ={idx} value={item.value}>{item.name}</option>)}
                    </select>
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
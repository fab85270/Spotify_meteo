import React, {useContext} from 'react';
import { TraductionContext } from '../../Context/TraductionContext';
import { useHistory,Link } from "react-router-dom";


const ButtonRedirection = () =>{

    let history = useHistory();
    const {traduction,traductionApp} = useContext(TraductionContext);

    const redirection = () =>{
        history.push("/spotiTherMe");
    }
    return (
        <button onClick={() => redirection()} className="buttonRedirection">
                                {traduction && "Back"}
                                {!traduction && "Retour"}
        </button>
    );
}

export default ButtonRedirection;
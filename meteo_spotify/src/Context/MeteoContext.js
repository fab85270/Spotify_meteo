import React,{createContext, useState} from 'react'

/* Notes préambule du projet : 
    - Le contexte méteo permettra d'avoir avoir à cette météo dans toutes les pages/composants du projet
*/

/* Definition du format de notre contexte */

 export const MeteoContext= createContext({
    codePostal: "",
    nomVille:"",
    numTemps: 0,
    setNomVille: () =>{},
    setCodePostal: () =>{}
   
})

export const MeteoContextProvider = ({children}) => { //Ici le children va représenter tous les composants/fichiers/routes impactées par 
    //Ce context => il correspond a tous les enfants, ce qu'il y a entre les balises de AccessTokenContextProvider de App.js
  
    /* Initialisation du context utilisé par le bouléen false */
    const [codePostal,setCodePostal] = useState("");
    const [nomVille,setNomVille] = useState("");
    const [numTemps,setNumTemps] = useState(0);
     
    const changeContexte = (codePostal,nomVille,numTemps) => {
        setCodePostal(codePostal);
        setNomVille(nomVille);
        setNumTemps(numTemps)
    }
      return (<MeteoContext.Provider value={{codePostal,nomVille,numTemps,changeContexte}}> {children} </MeteoContext.Provider>)
  };
  
 
import React,{createContext, useState} from 'react'

/* Definition du format de notre contexte */

 export const BoutonContext = createContext({
    boutonContexte: false,
    setBoutonContexte: () => {}
   
})


export const BoutonContextProvider = ({children}) => { //Ici le children va représenter tous les composants/fichiers/routes impactées par 
    //Ce context => il correspond a tous les enfants, ce qu'il y a entre les balises de AccessTokenContextProvider de App.js
  
    /* Initialisation du context utilisé par le bouléen false */
     const [boutonContexte,setBoutonContexte] = useState(false);
    
    const changeContexte = () => {
        setBoutonContexte(!boutonContexte);
    }
           console.log(boutonContexte);
      return (<BoutonContext.Provider value={{boutonContexte,changeContexte}}> {children} </BoutonContext.Provider>)
  };
  
  /** */
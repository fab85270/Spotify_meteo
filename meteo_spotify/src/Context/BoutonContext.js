import React,{createContext, useState} from 'react'

/* Definition du format de notre contexte */

 export const BoutonContext = createContext({
    clicked: false,
    setClicked: () => {}
   
})

export const BoutonContextProvider = ({children}) => { //Ici le children va représenter tous les composants/fichiers/routes impactées par 
    //Ce context => il correspond a tous les enfants, ce qu'il y a entre les balises de AccessTokenContextProvider de App.js
  
    /* Initialisation de l'état utilisé par le context */
     const [clicked,setClicked] = useState(false);
    
    const changeContexteBouton = () => {
        setClicked(!clicked);
    }
      return (<BoutonContext.Provider value={{clicked,changeContexteBouton}}> {children} </BoutonContext.Provider>)
  };
  
 
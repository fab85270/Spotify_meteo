import React,{createContext, useState} from 'react'

/* Contexte permettant la traduction de notre application en Anglais */

 export const TraductionContext = createContext({
    traduction: false, 
    setTraduction: () => {}
   
})

export const TraductionContextProvider = ({children}) => { 
    
    /* Initialisation du context utilisé par le bouléen false */
     const [traduction,setTraduction] = useState(false); //L'application n'est pas traduit par défault
    
    const traductionApp = () => {
        setTraduction(!traduction);
    }
      return (<TraductionContext.Provider value={{traduction,traductionApp}}> {children} </TraductionContext.Provider>)
  };
import React,{createContext, useState} from 'react'

/*Contexte permettant de le dark mode de l'application*/

export const DarkModeContext= createContext({
    dark: 'light',
    setDark: () =>{},
})

export const DarkModeProvider = ({children}) => { 
  
    /* Utilisation du hook (context,états) */
    const [dark,setDark] = useState('light');
     
    const darkApp = () => {
        if(dark='light'){
            setDark('dark')
        }else{
            setDark('light')
        }
    }

      return (<DarkModeContext.Provider value={{dark,darkApp}}> {children} </DarkModeContext.Provider>)
  };
  
 
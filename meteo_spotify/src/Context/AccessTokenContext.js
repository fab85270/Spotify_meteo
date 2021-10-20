import React,{createContext, useState} from 'react'

/* Definition du format de notre contexte */
 export const AccessTokenContext = createContext({
    accessToken: "",
    setAccessToken: () => {}
   
})

export const AccessTokenContextProvider = ({children}) => { //Ici le children va représenter tous les composants/fichiers/routes impactées par 
  //Ce context => il correspond a tous les enfants, ce qu'il y a entre les balises de AccessTokenContextProvider de App.js

  /* Initialisation du context utilisé par une chaine vide */
   const [accessToken,setAccessToken] = useState("");
    console.log("coucou");

    //Récupération du token de l'API spotify  : 

    const Authenticate = async() => {
      const { access_token } = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Basic ' + Buffer.from(process.env.REACT_APP_CLIENT_ID + ':' + process.env.REACT_APP_CLIENT_SECRET).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      },
      body: `grant_type=client_credentials`,
    }).then(res => res.json())

    console.log(access_token);

    /* Changement de l'état de accessToken par le token récupéré */
    setAccessToken(access_token);
   }
    console.log(accessToken);
    return (<AccessTokenContext.Provider value={accessToken,Authenticate}> {children} </AccessTokenContext.Provider>)
};

/** */




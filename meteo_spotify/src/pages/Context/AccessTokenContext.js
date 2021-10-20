import React,{createContext, useState} from 'react'

/* Definition du format de notre contexte */
 const AccessTokenContext = createContext({
    accessToken: "",
    setAccessToken: () => {}
   
})

const AccessTokenContextProvider = async ({children}) => {

  /* Initialisation du context utilisé par une chaine vide */
   const [accessToken,setAccessToken] = useState("");
    console.log("coucou");

    //Récupération du token de l'API spotify  : 

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
    console.log(accessToken);
    return (<AccessTokenContext.Provider value={accessToken}> {children} </AccessTokenContext.Provider>)
};

export default {AccessTokenContextProvider};




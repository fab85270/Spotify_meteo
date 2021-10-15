import React,{createContext, useState} from 'react'

/* Definition du format de notre contexte */
 const AccessTokenContext = createContext({
    accessToken: "",
    setAccessToken: () => {},
    getAccessToken: () => {}
})

/* On va créer le context provider */

const AccessTokenContextProvider = async ({children}) => {
    console.log("coucou");
    const [accessToken,setAccessToken] = useState("")
    
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

    console.log(accessToken);
    setAccessToken(access_token);

    return (<AccessTokenContext.Provider value={accessToken,getAccessToken}> {children} </AccessTokenContext.Provider>)
}



export default AccessTokenContextProvider;
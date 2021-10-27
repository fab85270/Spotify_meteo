import React,{createContext, useState} from 'react'

/* Definition du format de notre contexte */
 export const AccessTokenContext = createContext({
    accessToken: "",
    isConnected: false,
    setAccessToken: () => {},
    setIsConnected: () => {}
   
   
})

export const AccessTokenContextProvider = ({children}) => { //Ici le children va représenter tous les composants/fichiers/routes impactées par 
  //Ce context => il correspond a tous les enfants, ce qu'il y a entre les balises de AccessTokenContextProvider de App.js

  /* Initialisation du context utilisé par une chaine vide */
   const [accessToken,setAccessToken] = useState("");
   const [isConnected,setIsConnected] = useState(false);
  /* Rajouter un état booleen avec isConnected pour eviter d'utiliser l'accessToken sans être connecté. Et pour le remettre a false, on peut
  utiliser de nouveau ce state et le AccessToken sera initialisé à chaine vide 

  Notes : localstorage à utiliser si possible a la place un state pour stocker le AccessToken car c une donnée sensible => voir si g le temps.*/

    //Récupération du token de l'API spotify  : 

    const authenticate = async(selectedValue) => {
      
      /* Obtention des informations de connexion selon le compte choisit */

      var clientID="";
      var clientSecret="";

      switch(selectedValue){
        case '1': //Cas de Maxence
          clientID=process.env.REACT_APP_CLIENT_ID_MAX;
          clientSecret=process.env.REACT_APP_CLIENT_SECRET_MAX;

          console.log("client ID :"+clientID);
          console.log("clientSecret :"+clientSecret);
          break;
        case '2': //Cas Abel
          clientID=process.env.REACT_APP_CLIENT_ID_ABEL;
          clientSecret=process.env.REACT_APP_CLIENT_SECRET_ABEL;
          break;
        case '3': //Cas Fabien
          clientID=process.env.REACT_APP_CLIENT_ID_FAB;
          clientSecret=process.env.REACT_APP_CLIENT_SECRET_FAB;

          console.log("client ID :"+clientID );
          console.log("clientSecret :"+clientSecret);
        break;
        default:
          throw new Error("Le compte choisit ne figure pas parmis ceux listés"); //Déclaration d'une erreur.
      }
      
      try{
          const { access_token } = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Basic ' + Buffer.from(clientID + ':' + clientSecret).toString('base64'),
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
          },
          body: `grant_type=client_credentials`,
          }).then(res => res.json())

           /* Changement de l'état de accessToken et de isConneted par le token récupéré */

            setAccessToken(access_token);
            setIsConnected(true); 

      } catch(error){
        throw new Error("La connexion à l'API a échoué"); //Déclaration d'une erreur.
      }
   }

   const disconect = () => {
      setAccessToken("");
      setIsConnected(false);
   }
    console.log(accessToken);
    return (<AccessTokenContext.Provider value={{accessToken,isConnected,authenticate,disconect}}> {children} </AccessTokenContext.Provider>)
};

/** */




import React,{createContext, useState} from 'react'


/* Definition du format de notre contexte */
 export const AccessTokenContext = createContext({
    accessToken: "",
    isConnected: false,
    timeOutSession: false, //Par défaut, lors de son activation, la session ne sera pas TimeOut
    setAccessToken: () => {},
    setIsConnected: () => {},
    setTimeOutSession: () => {}
   
})

export const AccessTokenContextProvider = ({children}) => { //Ici le children va représenter tous les composants/fichiers/routes impactées par 
  //Ce context => il correspond a tous les enfants, ce qu'il y a entre les balises de AccessTokenContextProvider de App.js

  /* Initialisation des états utilisés au sein du context */
   const [accessToken,setAccessToken] = useState("");
   const [isConnected,setIsConnected] = useState(false);
   const [timeOutSession,setTimeOutSession] = useState(false);
   const [timer,setTimer] = useState(0);
  
   
  /* Récupération de l'AccessToken de l'API spotify selo le clientID et clientSecret associé  */

    const authenticate = async(selectedValue) => {
      
      /* Obtention des informations de connexion personnelles selon le compte auxquel nous voulons nous connecter */

      var clientID="";
      var clientSecret="";

      switch(selectedValue){
        case '1': //Cas de Maxence
          clientID=process.env.REACT_APP_CLIENT_ID_MAX;
          clientSecret=process.env.REACT_APP_CLIENT_SECRET_MAX;
          break;
        case '2': //Cas Abel
          clientID=process.env.REACT_APP_CLIENT_ID_ABEL;
          clientSecret=process.env.REACT_APP_CLIENT_SECRET_ABEL;
          break;
        case '3': //Cas Fabien
          clientID=process.env.REACT_APP_CLIENT_ID_FAB;
          clientSecret=process.env.REACT_APP_CLIENT_SECRET_FAB;
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
          body: `grant_type=client_credentials`
          }).then(res => res.json())
          /* créer une extention crochet -> àlire intéressant : https://auth0.com/docs/authorization/flows/customize-tokens-using-hooks-with-client-credentials-flow */
    
           /* Changement de l'état de accessToken et de isConneted(=true => connecté) par le token récupéré */

            setAccessToken(access_token);
            setIsConnected(true); 

          /* Au bout de 5 minutes, l'utilisateur sera déconnecté de l'application et devra se connecter de nouveau */

          const timer = setTimeout(() => setTimeOutSession(true),300000); //300000
          setTimer(timer);
        
      } catch(error){
        throw new Error("La connexion à l'API a échoué"); //Déclaration d'une erreur.
      }
   }

   /* Méthode chargée d'assurer la deconnexion du compte associé lors de l'expiration de la session ou une deconnexion manuelle */

   const disconect = () => {
      setAccessToken("");
      setIsConnected(false);
      clearTimeout(timer); //Le timer d'expiration de session crée dans la méthode Authenticate() par setTimeOut() sera supprimé 
   }
    return (<AccessTokenContext.Provider value={{accessToken,isConnected,timeOutSession,authenticate,disconect,setTimeOutSession}}> {children} </AccessTokenContext.Provider>)
};





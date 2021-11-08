import React,{createContext, useState} from 'react'

/* Notes préambule du projet : 
    - Le contexte méteo permettra d'avoir avoir à cette météo dans toutes les pages/composants du projet
*/

/* Definition du format de notre contexte */

 export const MeteoContext= createContext({
    codePostal: "",
    nomVille:"",
    numTemps: 0,
    intituleMeteo: "",
    cpErreur:"",
    setNomVille: () =>{},
    setCodePostal: () =>{},
    setNumTemps: () =>{},
    setIntituleMeteo: () =>{},
    authenticateCP: () =>{},
    setCPErreur: () =>{}
   
})

export const MeteoContextProvider = ({children}) => { //Ici le children va représenter tous les composants/fichiers/routes impactées par 
    //Ce context => il correspond a tous les enfants, ce qu'il y a entre les balises de AccessTokenContextProvider de App.js
  
    /* Initialisation du context utilisé par le bouléen false */
    const [codePostal,setCodePostal] = useState("");
    const [nomVille,setNomVille] = useState("");
    const [numTemps,setNumTemps] = useState(-1);
    const [intituleMeteo,setIntituleMeteo] = useState("");
    const [cpErreur,setCPErreur] = useState(false);

    const WEATHER = {
        0 : "Soleil",
        1 : "Peu nuageux",
        2 : "Ciel voilé",
        3 : "Nuageux",
        4 : "Très nuageux",
        5 : "Couvert",
        6 : "Brouillard",
        7 : "Brouillard givrant",
        10 : "Pluie faible",
        11 : "Pluie modérée",
        12 : "Pluie forte",
        13 : "Pluie faible verglaçante",
        14 : "Pluie modérée verglaçante",
        15 : "Pluie forte verglaçante",
        16 : "Bruine",
        20 : "Neige faible",
        21 : "Neige modérée",
        22 : "Neige forte",
        30 : "Pluie et neige mêlées faibles",
        31 : "Pluie et neige mêlées modérées",
        32 : "Pluie et neige mêlées fortes",
        40 : "Averses de pluie locales et faibles",
        41 : "Averses de pluie locales",
        42 : "Averses locales et fortes",
        43 : "Averses de pluie faibles",
        44 : "Averses de pluie",
        45 : "Averses de pluie fortes",
        46 : "Averses de pluie faibles et fréquentes",
        47 : "Averses de pluie fréquentes",
        48 : "Averses de pluie fortes et fréquentes",
        60 : "Averses de neige localisées et faibles",
        61 : "Averses de neige localisées",
        62 : "Averses de neige localisées et fortes",
        63 : "Averses de neige faibles",
        64 : "Averses de neige",
        65 : "Averses de neige fortes",
        66 : "Averses de neige faibles et fréquentes",
        67 : "Averses de neige fréquentes",
        68 : "Averses de neige fortes et fréquentes",
        70 : "Averses de pluie et neige mêlées localisées et faibles",
        71 : "Averses de pluie et neige mêlées localisées",
        72 : "Averses de pluie et neige mêlées localisées et fortes",
        73 : "Averses de pluie et neige mêlées faibles",
        74 : "Averses de pluie et neige mêlées",
        75 : "Averses de pluie et neige mêlées fortes",
        76 : "Averses de pluie et neige mêlées faibles et nombreuses",
        77 : "Averses de pluie et neige mêlées fréquentes",
        78 : "Averses de pluie et neige mêlées fortes et fréquentes",
        100 : "Orages faibles et locaux",
        101 : "Orages locaux",
        102 : "Orages fort et locaux",
        103 : "Orages faibles",
        104 : "Orages",
        105 : "Orages forts",
        106 : "Orages faibles et fréquents",
        107 : "Orages fréquents",
        108 : "Orages forts et fréquents",
        120 : "Orages faibles et locaux de neige ou grésil",
        121 : "Orages locaux de neige ou grésil",
        122 : "Orages locaux de neige ou grésil",
        123 : "Orages faibles de neige ou grésil",
        124 : "Orages de neige ou grésil",
        125 : "Orages de neige ou grésil",
        126 : "Orages faibles et fréquents de neige ou grésil",
        127 : "Orages fréquents de neige ou grésil",
        128 : "Orages fréquents de neige ou grésil",
        130 : "Orages faibles et locaux de pluie et neige mêlées ou grésil",
        131 : "Orages locaux de pluie et neige mêlées ou grésil",
        132 : "Orages fort et locaux de pluie et neige mêlées ou grésil",
        133 : "Orages faibles de pluie et neige mêlées ou grésil",
        134 : "Orages de pluie et neige mêlées ou grésil",
        135 : "Orages forts de pluie et neige mêlées ou grésil",
        136 : "Orages faibles et fréquents de pluie et neige mêlées ou grésil",
        137 : "Orages fréquents de pluie et neige mêlées ou grésil",
        138 : "Orages forts et fréquents de pluie et neige mêlées ou grésil",
        140 : "Pluies orageuses",
        141 : "Pluie et neige mêlées à caractère orageux",
        142 : "Neige à caractère orageux",
        210 : "Pluie faible intermittente",
        211 : "Pluie modérée intermittente",
        212 : "Pluie forte intermittente",
        220 : "Neige faible intermittente",
        221 : "Neige modérée intermittente",
        222 : "Neige forte intermittente",
        230 : "Pluie et neige mêlées",
        231 : "Pluie et neige mêlées",
        232 : "Pluie et neige mêlées",
        235 : "Averses de grêle",
    }
     
    const changeContexte = (codePostal,nomVille,numTemps,intituleMeteo) => {
        setCodePostal(codePostal);
        setNomVille(nomVille);
        setNumTemps(numTemps);
        setIntituleMeteo(intituleMeteo);
    }

    const authenticateCP = async (cp) =>{
        setCPErreur(false); 
        const token=process.env.REACT_APP_TOKEN; //Récupération du token
        const responseCP = await fetch('https://api.meteo-concept.com/api/location/cities?token='+token+'&search='+ cp);
        const CP = await responseCP.json();
 

        /*Récuperation de l'erreur dans le cas d'une mauvaise saisie de CP  */
        if (!CP.cities[0]){
            setCPErreur(true);
            return 
        }
        
        const response = await fetch('https://api.meteo-concept.com/api/forecast/nextHours?token='+token+'&insee='+ CP.cities[0].insee);
        const donneesMeteo = await response.json();

        /* Changement du contexte avec les informations obtenues sur la météo suite à la requête selon le code postal saisit (codePostal/nomVille/donnéesMétéo) */
            changeContexte(cp,CP.cities[0].name,donneesMeteo.forecast[0].weather,WEATHER[donneesMeteo.forecast[0].weather]);    

    }
      return (<MeteoContext.Provider value={{codePostal,nomVille,numTemps,intituleMeteo,cpErreur,changeContexte,authenticateCP,setCPErreur}}> {children} </MeteoContext.Provider>)
  };
  
 
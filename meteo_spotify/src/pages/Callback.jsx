import LayoutGlobal from '../Layout/LayoutGlobal';
const Callback = () =>{
    return(
        <LayoutGlobal children={
            <h1><strong>Bienvenue dans le callback de l'application</strong></h1>   
        }>         
        </LayoutGlobal>
               
        /* Dans ce callback, récupérer le token depuis le access_token de l'URL. 
            -> faire des boutons pour saisir chacune des fonctionalités proposées par cette application : lire musique.. proposer playlist selon le temps..
            -> faire accès a l'API météo.
            -> voir autre possibilités. */
    );
}

export default Callback;

//Ici on devra instaurer dans notre composant tout les autres composants déja attribués et dans le index.js, changer le App par CatFactLayout 
/* qui permettra de ne pas avoir l'interface de base de react mais ici notre composant CatFactLayout en premier. 
la fonction "https://catfact.ninja/fact " permettra de générer des textes aléatoires

/!\  Un état est atteignable dans tout un composant. Donc il est atteignable depuis toutes les fcts  
/!\   Connection a l'API se fait toujours dans le layout
*/


import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ajouter le boostrap au sein de l'application
import LayoutGlobal from '../../Layout/LayoutGlobal';
import ButtonRedirection from '../Button/ButtonRedirection';
import React, {useContext} from 'react';
import {AccessTokenContext} from '../../Context/AccessTokenContext';
import Carousel from 'react-bootstrap/Carousel' 

function SpotiTherLayout({}){ 
    
     /* Utilisation des hooks */
     const {accessToken,isConnected,authenticate,disconect} = useContext(AccessTokenContext);


    if(!isConnected){
        return (      
            <LayoutGlobal children={
                <>
                    <h1>Welcome to the web site</h1>
                    <p>Ici mettre des images.. photos et tout..informations are coming...</p>  
                    <Carousel>
                        <Carousel.Item Intervalle = {1000}>
                            <img 
                                className="d-block w-100"
                                src="holder.js/800x400?text=First slide&bg=373940"
                                alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>           
                </>       
            }></LayoutGlobal>
        ) 
    } else {
        return (      
            <LayoutGlobal children={
                <>
                    <h1>Welcome to the web site</h1>
                    <p>Ici mettre des images.. photos et tout..informations are coming...</p>
                    <ButtonRedirection/>
                </>       
            }></LayoutGlobal>
    )
    }
}
export default SpotiTherLayout;


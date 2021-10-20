
//Ici on devra instaurer dans notre composant tout les autres composants déja attribués et dans le index.js, changer le App par CatFactLayout 
/* qui permettra de ne pas avoir l'interface de base de react mais ici notre composant CatFactLayout en premier. 
la fonction "https://catfact.ninja/fact " permettra de générer des textes aléatoires

/!\  Un état est atteignable dans tout un composant. Donc il est atteignable depuis toutes les fcts  
/!\   Connection a l'API se fait toujours dans le layout
*/


import './style.css';

import {useState,useEffect} from 'react'; // pour utiliser useState, il faut faire un import de la sorte
import NavBar from '../Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ajouter le boostrap au sein de l'application
import LayoutGlobal from '../../Layout/LayoutGlobal';

function SpotiTherLayout({}){ 
    return (      
            <LayoutGlobal children={
                <>
                    <h1>Welcome to the web site</h1>
                    <p1>Ici mettre des images.. photos et tout..informations are coming...</p1>
                   
                </>
                
            }></LayoutGlobal>
    )
}
export default SpotiTherLayout;


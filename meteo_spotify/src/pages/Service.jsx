<<<<<<< HEAD
import Navbar from '../components/Navbar/Navbar';
import LayoutGlobal from '../Layout/LayoutGlobal';

/* Demander comment utiliser le navbar dans toute les "classes" ? le faire hériter ? utiliser "contexte" ?? */
const Service = () =>{
    return(
        <LayoutGlobal children={
            <>  
                <h1>Service</h1>     
            </>

        }>
        </LayoutGlobal>
    );
}

<<<<<<< HEAD
export default About;
=======

import LayoutGlobal from '../Layout/LayoutGlobal';
import React, {useContext} from 'react';
import { TraductionContext } from '../Context/TraductionContext';
import SpotiTherMeLogo from '../Images/baniereMusique.jpg';


const Service = () =>{

    const {traduction,traductionApp} = useContext(TraductionContext);

    return(
    <LayoutGlobal children={
        <>
            <h1 style={{textAlign:'center'}}>
                {!traduction && "Service"}
                {traduction && "Service"}
            </h1>
            <div style={{textAlign:'center'}}>
                <p>
                    {!traduction && "Bienvenue dans notre application SpotiThear"}
                    {traduction && "Welcome in our application SpotiThear"}
                </p>
                <p>
                    {!traduction && "Grace à elle, vous pourrez découvrir des applications selon le temps"}
                    {traduction && "Thanks to it, you will be able to discover applications according to the weather"}
                
                </p>
                <p>
                    {!traduction && "Vous avez deux choix, vous pouvez rentrer dans la barre de recherche un artiste/album/Playlist et les voir"}
                    {traduction && "You have two choices, you can enter an Artist / Album / Playlist in the search bar and see them"}
                
                </p>
                <p>
                    {!traduction && "Ou alors vous entrez un code postal et selon la météo, nous vous proposerons une playlist adapté au temps"}
                    {traduction && "Or you enter a postal code and depending on the weather, we will offer you a playlist adapted to the weather"}
                
                </p>
                <div className="memberSpotiTherMe">
                    {!traduction && "Ce projet a été réalisé en commun par"}
                    {traduction && "This project was carried out jointly by"}
                     <br/>
                        Coutanceau Fabien /
                        Losego Abel /
                        Bodo Maxence
                </div>
            </div>
            <img style={{width:'50%',wheight:'50%',display:'block',marginLeft:'auto',marginRight:'auto'}} src={SpotiTherMeLogo} ></img>
        </>
    }>   
    </LayoutGlobal>
    );
}
export default Service;

/* Crée un layout assez global avec une navbar ou autre élément présent sur chaque page qui est toujours présente et modifier  */
>>>>>>> 7e0ed6919bc32257206bc0670493ac463993113a
=======
export default Service;
>>>>>>> 429a93f6c79ec8a50a486fcd53f4931212339570


import Navbar from '../components/Navbar/Navbar';
import LayoutGlobal from '../Layout/LayoutGlobal';
/* Demander comment utiliser le navbar dans toute les "classes" ? le faire hériter ? utiliser "contexte" ?? */
const About = () =>{
    return(
    <LayoutGlobal children={
        <h1>About</h1>  
    }>         
    </LayoutGlobal>
    );
}

export default About;

/* Crée un layout assez global avec une navbar ou autre élément présent sur chaque page qui est toujours présente et modifier  */
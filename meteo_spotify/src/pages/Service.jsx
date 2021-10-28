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

export default Service;
import { children } from "react";
import Navbar from '../components/Navbar/Navbar';

const LayoutGlobal= ({children}) =>{
    return(
        <div>
            <Navbar></Navbar> 
            {children} 
        </div> 
        /* Ajouter un footer (bas de page) */ 
    );
}
export default LayoutGlobal;
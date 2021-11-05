import Navbar from '../components/Navbar/Navbar';
import Card from 'react-bootstrap/Card'; 

const LayoutGlobal= ({children}) =>{
    return(
        <div>
            <Navbar></Navbar>  
            {children} 
            <Card>
                <Card.Footer className="text-muted">
                    © 2021 Copyright: Projet MASTER 1 MIAGE ReactJS 
                </Card.Footer>
            </Card> 
        </div> 
        /* Ajouter un footer (bas de page) */ 
    );
}
export default LayoutGlobal;
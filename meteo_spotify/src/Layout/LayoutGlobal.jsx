import Navbar from '../components/Navbar/Navbar';
import Card from 'react-bootstrap/Card'; 
import { Instagram,Twitter,Linkedin } from 'react-bootstrap-icons';
import './LayoutGlobal.css';


const LayoutGlobal= ({children}) =>{
    return(
        <div className="layoutGlobal">
            <Navbar></Navbar>  
            {children} 

            <Card>
                <Card.Footer className="text-muted">
                    <div class="text-center">
                        © 2021 Copyright: Projet MASTER 1 MIAGE ReactJS
                        <div className="socialNetwork">
                            <a href="https://www.instagram.com/spotify/?hl=fr">
                                <Instagram/>
                            </a> 
                            <a href="https://twitter.com/spotifyfrance">
                                <Twitter/>
                            </a>
                            <a href="https://fr.linkedin.com/company/spotify">
                                <Linkedin/>
                            </a>  
                        </div>      
                    </div>
                </Card.Footer>
            </Card> 
        </div> 
    );
}
export default LayoutGlobal;
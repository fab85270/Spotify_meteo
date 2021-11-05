
import 'bootstrap/dist/css/bootstrap.min.css'; // Ajouter le boostrap au sein de l'application
import LayoutGlobal from '../Layout/LayoutGlobal';
import ButtonRedirection from '../components/Button/ButtonRedirection';
import React, {useContext} from 'react';
import {AccessTokenContext} from '../Context/AccessTokenContext';
import Carousel from 'react-bootstrap/Carousel'; 
import Modal from 'react-bootstrap/Modal'; 
import imageHome from '../Images/menu2.jpeg';
import image2 from '../Images/imageHome.jpeg';
import Ballet from '../Images/Ballet.jpg';
import { TraductionContext } from '../Context/TraductionContext';


function HomePage(){ 
    
     /* Utilisation des hooks */
     const {accessToken,isConnected,authenticate,disconect} = useContext(AccessTokenContext);
     const {traduction,traductionApp} = useContext(TraductionContext);


    if(!isConnected){
        return (      
            <LayoutGlobal children={
                <>  
                    <h1 style={{textAlign:"center"}}>La musique par tous temps</h1>
                    <Carousel>
                        <Carousel.Item>
                            <img 
                                className="d-block w-100"
                                src={imageHome}
                                alt="imageHome"
                                height ="500"
                            />
                            <Carousel.Caption>
                                <h3 style={{backgroundColor:'black',width:'50%',margin:'auto'}}>
                                    {traduction && "Your Music"}
                                    {!traduction && "Votre Musique"}
                                </h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                                className="d-block w-100"
                                src={image2}
                                alt="e"
                                height ="500"
                            />
                            <Carousel.Caption>
                                <h3 style={{backgroundColor:'black',width:'50%',margin:'auto'}}>
                                    {!traduction && "Selon la météo"}
                                    {traduction && "According to the meteo"}
                                </h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                                className="d-block w-100"
                                src={Ballet}
                                alt="e"
                                height ="500"
                            />
                            <Carousel.Caption>
                                <h3 style={{backgroundColor:'black',width:'50%',margin:'auto'}}>
                                    {traduction && "A Personalized atmosphere"}
                                    {!traduction && "Une ambiance personnalisée"}
                                </h3>
                            </Carousel.Caption>
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
                    <Carousel>
                        <Carousel.Item>
                            <img 
                                className="d-block w-100"
                                src={imageHome}
                                alt="imageHome"
                            />
                            <Carousel.Caption>
                                <h3>
                                    {traduction && "Hello"}
                                    {!traduction && "Coucou"}
                                </h3>
                                <p>
                                    {traduction && "Nulla vitae elit libero, a pharetra augue mollis interdum."}
                                    {!traduction && "wesh"}
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                                className="d-block w-100"
                                src={image2}
                                alt="e"
                            />
                            <Carousel.Caption>
                                <h3>Hello</h3>
                                <p>Second diapo</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                                className="d-block w-100"
                                src=""
                                alt="e"
                            />
                            <Carousel.Caption>
                                <h3>Hello</h3>
                                <p>Troisième diapo</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>  
                    <ButtonRedirection/>
                </>       
            }></LayoutGlobal>
    )
    }
}
export default HomePage;


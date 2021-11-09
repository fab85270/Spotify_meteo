
import 'bootstrap/dist/css/bootstrap.min.css'; // Ajouter le boostrap au sein de l'application
import LayoutGlobal from '../Layout/LayoutGlobal';
import React, {useContext} from 'react';
import {AccessTokenContext} from '../Context/AccessTokenContext';
import Carousel from 'react-bootstrap/Carousel'; 
import imageHome from '../Images/menu2.jpeg';
import image2 from '../Images/imageHome.jpeg';
import Ballet from '../Images/Ballet.jpg';
import { TraductionContext } from '../Context/TraductionContext';


function HomePage(){ 
    
     /* Utilisation des hooks */
     const {traduction,traductionApp} = useContext(TraductionContext);
    
        return (      
            <LayoutGlobal children={
                <>  
                    <h1 style={{textAlign:"center"}}>
                        {!traduction && "L'application de musique de tous les temps"}
                        {traduction && "Music application for all time"}
                    </h1>
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
    } 
export default HomePage;


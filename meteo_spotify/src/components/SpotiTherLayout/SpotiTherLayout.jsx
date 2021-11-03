
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ajouter le boostrap au sein de l'application
import LayoutGlobal from '../../Layout/LayoutGlobal';
import ButtonRedirection from '../Button/ButtonRedirection';
import React, {useContext} from 'react';
import {AccessTokenContext} from '../../Context/AccessTokenContext';
import Carousel from 'react-bootstrap/Carousel'; 
import imageHome from './ImageHomePage/menu2.jpeg';
import image2 from './ImageHomePage/imageHome.jpeg';
import { TraductionContext } from '../../Context/TraductionContext';

function SpotiTherLayout({}){ 
    
     /* Utilisation des hooks */
     const {accessToken,isConnected,authenticate,disconect} = useContext(AccessTokenContext);
     const {traduction,traductionApp} = useContext(TraductionContext);


    if(!isConnected){
        return (      
            <LayoutGlobal children={
                <>  
                <h1>coucou</h1>
                    <Carousel>
                        <Carousel.Item>
                            <img 
                                className="d-block w-100"
                                src={imageHome}
                                alt="imageHome"
                                height='800px'
                                width="100px"
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


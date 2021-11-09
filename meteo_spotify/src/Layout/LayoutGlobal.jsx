import Navbar from '../components/Navbar/Navbar';
import Card from 'react-bootstrap/Card'; 
import { Instagram,Twitter,Linkedin } from 'react-bootstrap-icons';
import './LayoutGlobal.css';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../components/GlobalStyle/GlobalStyle";
import { lightTheme, darkTheme } from "../components/Theme"
import React, { useState} from "react";


const LayoutGlobal= ({children}) =>{

    const [theme, setTheme] = useState('light');

    return(
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
            <GlobalStyles/>
        <div className="layoutGlobal"> 
            <Navbar></Navbar>  
            {children} 
            <Card>
                <Card.Footer className="text-muted">
                    <div class="text-center">
                        © 2021 Copyright: Projet MASTER 1 MIAGE ReactJS
                        <div className="socialNetwork">
                            <a href="https://www.instagram.com/spotify/?hl=fr" target="_blank">
                                <Instagram/>
                            </a> 
                            <a href="https://twitter.com/spotifyfrance" target="_blank">
                                <Twitter/>
                            </a>
                            <a href="https://fr.linkedin.com/company/spotify" target="_blank">
                                <Linkedin/>
                            </a>  
                        </div>      
                    </div>
                </Card.Footer>
            </Card> 
        </div> 
        </>
    </ThemeProvider>
    );
}
export default LayoutGlobal;
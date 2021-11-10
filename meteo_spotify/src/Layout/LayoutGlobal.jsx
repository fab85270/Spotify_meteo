import Navbar from '../components/Navbar/Navbar';
import Card from 'react-bootstrap/Card'; 
import { Instagram,Twitter,Linkedin } from 'react-bootstrap-icons';
import './LayoutGlobal.css';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../components/GlobalStyle/GlobalStyle";
import { lightTheme, darkTheme } from "../components/Theme"
import { DarkModeContext } from '../Context/DarkModeContext';
import React, { useContext, useState} from "react";


const LayoutGlobal= ({children}) =>{

    /* Definition des hooks(useState/useContext) */
    const {dark, setDark,darkApp} = useContext(DarkModeContext);
    console.log("Darkmode : "+dark);

    return(
        <ThemeProvider dark={dark === 'light' ? lightTheme : darkTheme}>
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
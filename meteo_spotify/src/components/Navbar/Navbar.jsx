
import React from 'react';
import './Navbar.css';

/* Mettre la définition de connexion ici ou autre part : App.js ou SpotiTheirLayout ?  */
const CLIENT_ID = "59a94d450e3847148c1416d81d8baac2";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = 'http://localhost:3000/callback/';
const SPACE_DELIMITER = "%20";
const SCOPES = ["user-read-currently-playing","user-read-playback-state"];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

function NavBar(){
    const handleLogin = () => {
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    }
    return (
        <div className="divNav">
            <ul>
                <li><a class="active" href="/">Home</a></li>
                <li><a href="/service">Service</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="#about"><button onClick={handleLogin} className="ApiSpotify">S'identifier</button></a></li>
            </ul>

        </div>
        //Créer un composant lien : voir avec le prof si c'est nécéssaire ? 
    );
};

export default NavBar;
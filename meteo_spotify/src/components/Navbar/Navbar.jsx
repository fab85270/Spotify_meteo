
import React from 'react';
import './Navbar.css';

/* Mettre la définition de connexion ici ou autre part : App.js ou SpotiTheirLayout ?  */
const CLIENT_ID = "59a94d450e3847148c1416d81d8baac2";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = 'http://localhost:3000/Callback/';
const SPACE_DELIMITER = "%20";
const SCOPES = ["user-read-currently-playing","user-read-playback-state"]; //action possible par le user sur l'API ? 
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

function NavBar(){
    const handleLogin = () => {
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    }
    return (
        <div className="divNav">
            <nav>
                <ul className="fonction">
                    <a href="/"  className="btn">Home</a>
                    <a href="/service"  className="btn">Service</a> 
                    <a href="/about"  className="btn">Contact</a>
                    <li><button onClick={handleLogin} className="ApiSpotify">S'identifier</button></li>
                </ul>
            </nav>
        </div>
        //Créer un composant lien : voir avec le prof si c'est nécéssaire ? 

        /* Notes sur lesquelles réflechir :
            - Suite au callback, un acces token qui dure 60 minutes est renvoyé afin de permettre a l'application d'interragir avec l'API.
            - Comment récupérer ce token ? comment l'utiliser ??
        
        */

    );
};

export default NavBar;
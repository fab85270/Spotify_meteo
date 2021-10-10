
import React from 'react';
import './Navbar.css';

const CLIENT_ID = "6f0013051b3843fda142c22a63919672";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/callback";
const SPACE_DELIMITER = "%20";
const SCOPES = ["user-read-currently-playing","user-read-playback-state"];
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
                    <li><button variant="warning" onClick={handleLogin} className="ApiSpotify">S'identifier</button></li>
                </ul>
            </nav>
        </div>
        //Créer un composant lien ? 
    );
};

export default NavBar;
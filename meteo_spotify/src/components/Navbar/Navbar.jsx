
import React from 'react';
import './Navbar.css';

const CLIENT_ID = "6f0013051b3843fda142c22a63919672";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/SpotiTherLayout";
const SPACE_DELIMITER = "%20";
const SCOPES = ["user-read-currently-playing","user-read-playback-state"];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

function NavBar(){
    const handleLogin = () => {
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    }
    return (
        <nav>
            <ul className="fonction">
                <li className="btn">Home</li>
                <li className="btn">Service</li>
                <li className="btn">Contact</li>
                <li><button onClick={handleLogin} className="ApiSpotify">S'identifier</button></li>
            </ul>
           
        </nav>
    );
};

export default NavBar;
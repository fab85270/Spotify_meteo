
import React from 'react';
import './Navbar.css';


const NavBar = () => {

    const  handleLogin = async () => {
        
    const { access_token } = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Basic ' + Buffer.from(process.env.REACT_APP_CLIENT_ID + ':' + process.env.REACT_APP_CLIENT_SECRET).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      },
      body: `grant_type=client_credentials`,
    }).then(res => res.json())
    console.log(access_token);
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

/*
export const constante = {

} 
voir la doc reactRouter avec history pour les redirections notamment 

Avec context, sauvegarder le token utilisé généré dans l'application

*/
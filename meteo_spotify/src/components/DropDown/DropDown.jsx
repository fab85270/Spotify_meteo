import React from 'react';



/* Lien yt : https://www.google.com/search?client=firefox-b-d&q=utilisation+API+spotify+react+js#kpvalbx=_6Sl5Yb--LY6OlwT_gLiACA29 */
const DropDown = () => {

    /* Définition des valeurs dans le dropdown */
    
   const data = [
        {value: 1, name: 'Maxence'},
        {value:2, name: "Abel"},
        {value:3, name: "Fabien"},
    ];

    return (
        <div>
            <select value="Connecter">
                {data.map((item,idx) => <option key ={idx} value={item.value}>{item.name}</option>)}
            </select>
        </div>
    );
}

export default DropDown; 
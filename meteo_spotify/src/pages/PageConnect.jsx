import React from 'react';
import LayoutGlobal from '../Layout/LayoutGlobal';
import Form_Connect from "../components/Form_Connect/Form_Connect";



const PageConnect = () => {

    const recupererCompte = (event) => {
        //console.log(event.target.value);

    }
    return(   
            <Form_Connect>
                checkSubmit={recupererCompte}
            </Form_Connect>
        );
}
export default PageConnect;
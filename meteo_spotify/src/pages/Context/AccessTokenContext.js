import React,{createContext, useState} from 'react'

export const AccessTokenContext = createContext({
    accessToken: "",
    setAccessToken: info => {}
})

/* On va créer le context provider */

const AccessTokenContextProvider = ({children}) => {
    const AccessTokenState = {
        accessToken: "",
        setAccessToken: info => 
            setAccessToken(prevState => ({
            ...prevState,
            accessToken: info.accessToken

    }))
    }
    const [AccessToken,setAccessToken] = useState(AccessTokenState) //La mise a jour de l'état va mettre a jour le contenu du context

    return (<AccessTokenContext.Provider value={AccessToken}> {children} </AccessTokenContext.Provider>)
}

export default AccessTokenContextProvider;
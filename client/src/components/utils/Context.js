import React, {createContext} from 'react'

 const loginState = {
    isLogged: false,
    user: '',
    sessionUser:(user) => {loginState.user = user},
    sessionStart:(login) => {
        return login 
        ? loginState.isLogged = true 
        : loginState.isLogged = false 
    }
}

export const SessionID = createContext(loginState);

const Context = ({children}) => {
    return (
        <SessionID.Provider value={loginState}>
            {children}
        </SessionID.Provider>
    )
}

export default Context

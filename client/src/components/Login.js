import React, {useContext, useState} from 'react'
import { Background } from './styles/Styles'
import {Redirect} from 'react-router-dom'
import {SessionID} from './utils/Context'
import Form from './Form'



const Login = () => {

    const session = useContext(SessionID)
    const [redirect, setRedirect] = useState(false)


    function formSubmit(user) {
        session.sessionStart(true)
        session.sessionUser(user)
        return setRedirect(true)
    }

    
    return (
        <>
            <Background source="/img/background-2.jpg" />
            {redirect ? <Redirect exact to="/" /> : <Form submitted={formSubmit}/>}
        </>
    )
}

export default Login

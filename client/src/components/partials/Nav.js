import React, {useContext, useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import { Navbar, Navlist, NavItem, MenuItem, Header} from '../styles/Styles'
import { HiOutlineLogin, HiOutlineLogout, HiHome } from "react-icons/hi";
import {SessionID} from '../utils/Context'


const Nav = () => {

    const session = useContext(SessionID)
    const [logbutton, setLogButton] = useState({
        text : "Login",
        isLogged : false
    })

    const location = useLocation()

    function logstate() {
        if(location !== "/login") {
            session.sessionStart(false)
            session.sessionUser(null)
            
            return setLogButton({
                text : "Login",
                isLogged : false 
            })
        }
    } 


    useEffect(() => {

        if(location.pathname !=="/login" && session.isLogged) {
            return setLogButton({
                text : "Logout",
                isLogged : true
            })
        }
    }, [location.pathname, session.isLogged])




    return (
        <Header>
            <Navbar 
                background="transparent"
            >
                <Navlist>
                    <NavItem>
                    <Link to="/login" onClick={logstate}>
                        {logbutton.isLogged ? <HiOutlineLogout /> :  <HiOutlineLogin />}
                        <MenuItem>{logbutton.text}</MenuItem>
                    </Link> 
                    </NavItem>
                    <NavItem>
                        <Link to="/">
                            <HiHome />
                            <MenuItem>Home</MenuItem>
                        </Link>
                    </NavItem>
                </Navlist>
            </Navbar>
        </Header>   
    )
}

export default Nav

import React from 'react'
import {Route, Switch} from "react-router-dom"
import Homepage from './components/Homepage'
import Login from './components/Login'
import Nav from './components/partials/Nav'
import './App.css'
import {Main} from './components/styles/Styles'
import { motion } from "framer-motion"


const App = () => {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}>
        <Main>
            <Nav/>
            <Switch>
                
                <Route exact path="/" >
                    <Homepage/>
                </Route>
                <Route to="/login" component={Login}/>
            </Switch>
        </Main>
        </motion.div>
    )
}

export default App

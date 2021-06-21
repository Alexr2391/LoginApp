import React, {useContext, useEffect, useState} from 'react'
import {SessionID} from './utils/Context' 
import Axios from 'axios'
import {Redirect} from 'react-router-dom'
import { FaUserAlt} from "react-icons/fa";
import {
    Background, 
    Container, 
    Wrapper, 
    CardContainer, 
    CardImage, 
    CardWrapper, 
    InfoBox,
    UserLogged} from './styles/Styles'



const Homepage = () => {

    const loginstate = useContext(SessionID)

    const [datas, setDatas] = useState([])

    useEffect(() => {
        (async() => {
           const {data} = await Axios({
                method: "GET", 
                url: "/api"
            })

            setDatas(data)
        })()
    },[])

    if(!loginstate.isLogged) {
        return <Redirect to="/login"></Redirect>
    }
    return (
        <>

            <Background source="/img/background-2.jpg" />
            <UserLogged>
                <FaUserAlt />
                <span>Welcome {loginstate.user}!</span>
            </UserLogged>
            <Container>
                <Wrapper>
                    {datas && datas.map((item) => {
                        return (
                            <CardContainer key={item.id}>
                                <CardImage />
                                <CardWrapper>
                                    <InfoBox><span>ID: </span>{item.id}</InfoBox>
                                    <InfoBox><span>Name: </span>{item.firstName}</InfoBox>
                                    <InfoBox><span>Last Name: </span>{item.lastName}</InfoBox>
                                    <InfoBox><span>Date: </span>{item.createdTimeStamp}</InfoBox>
                                    <InfoBox><span>Admin: </span>{item.isAdmin ? 'True' : 'False'}</InfoBox>
                                </CardWrapper>
                            </CardContainer>
                        )
                    })}
                </Wrapper>
            </Container>
        </>
    )
}

export default Homepage

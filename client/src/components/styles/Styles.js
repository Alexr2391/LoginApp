import styled from 'styled-components'
import { motion } from "framer-motion";


// --------- LAYOUT ELEMENTS --------------
export const Main = styled.main`
    width: 100%;
    position:relative;
`

export const Header = styled.header`
    width: 100%;
    position: relative;
`


export const Background = styled.div.attrs(props => ({
    source : props.source || null
}))`
    position: fixed;
    top: 0;
    z-index: -1;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("${props => props.source}");
    background-repeat : no-repeat; 
    background-position: 50%;
    background-size: cover;
`


// -------- Navigation Bar --------------


export const Navbar = styled.nav.attrs(props => ({
    background : props.background || '#fff',
    size: props.size || "50px", 
    shadow: props.shadow || 'none'
}))`
    width: 100%;
    box-shadow: ${props => props.shadow};
    height: ${props => props.size};
    background-color: ${props => props.background};
    display:flex;
    align-items:center;
    justify-content: center;
    position: fixed;
    top: 0: 
    left: 0;
`

export const MenuItem = styled.span`
    margin-left: .3rem;
    position: relative;
    color: #fff;
    &:after {
        opacity: 0;
        position: absolute;
        content: '';
        width: 100%;
        height: 2px;
        bottom: -5px;
        left:0;
        background-color: orange;
    }
`

export const NavItem = styled.li`
    display:flex;
    margin-right: 2rem;
    a {
        text-decoration: none; 
        color: #fff;
        display:flex;
        align-items:center;
        &:hover svg, &:hover span${MenuItem}{
            transition: .2s ease-in-out;
            color: #EF5407;
        }
    }
`


export const Navlist = styled.ul.attrs(props => ({
    width: props.width || '80%'
}))`
    width: ${props => props.width};
    height: inherit;
    list-style: none;
    display:flex;
    align-items:center;
    justify-content: flex-start;
`




// --------- LOGIN ELEMENTS --------------

export const FormSection = styled.section`
    display:flex;
    border-radius: 2rem;
    overflow:hidden;
    border-radius: 10px;
    max-height: 700px;
    max-width: 1000px;
    min-height: 600px
    width: 100%;
    height: 100%;
    box-shadow: 1rem 1rem 2rem rgba(0,0,0, 0.3);
    background-color: #fff;
    position:relative; 
    top: 100px;
    margin: 0 auto;
    @media only screen and (max-width: 1000px){
        width: 95%;
    }
    @media only screen and (max-width: 600px){
        width: 90%;
    }
`

export const FormImage = styled.div`
    flex: 0 0 45%;
    height: inherit;
    background-image: url('/img/connections.jpg');
    background-position: 50%;
    background-size: cover;
    background-color: #E24F0A;
    background-blend-mode: overlay;
    @media screen and (max-width: 700px){
        display:none;
    }

`

export const FormContainer = styled.div`
    flex: 0 0 55%;
    height: inherit;
    display:flex;
    justify-content: center;
    @media screen and (max-width: 700px){
        flex: 0 0 100%;
    }
`

export const FormLayout = styled.form`
    margin-top: 4rem;
    width: 100%;
    display:flex;
    height: inherit;
    flex-direction: column;
    align-items:center;
`

export const FormTitle = styled.h1`
    color: #FF9504;
`




//------------------ Input styling -----------

export const Fieldset = styled.div`
    width: 80%;
    height: 3rem;
    border-radius: .2rem;
    display:flex;
    flex-direction: column;
    padding-left: .7rem;
    justify-content: center;
    overflow: hidden;
    transition: border .3s ease-in-out;
    border: .1rem solid whitesmoke;
    margin-top: 3rem;
    &:focus, &:active, &:hover{
        border: .1rem solid #FF9504;
    }
    &#tickbox{
        border: unset;
        diplay: flex;
        flex-direction: row;
        align-items: center;
        label {
            order: 2
        }
    }
    &#submit{
        height: unset;
        align-items: center;
        border: none;
    }
    svg {
        margin-right: .7rem;
    }
`

export const InputContainer = styled.div`
    display:flex;
    flex: 0 0 100%;
    align-items: center;
    height: inherit;
`

export const Inputs = styled.input`
    width: 100%;
    outline-width: 0;
    &[type='text'], &[type='password']{
        flex: 2;
        height: inherit;
        border: none;
        font-size: 1.2rem;
        &::placeholder{
            text-indent: 15px;
        }
    }
    &[type='checkbox']{
        height: 20px;
        width: 20px;
        margin-right: .5rem;
    }
    &[type="submit"]{
        cursor: pointer;
        width: 150px;
        padding: .8rem .6rem;
        background-color: #FF9504;
        border: none;
        color: #fff;
        font-size: 1.2rem;
        &:hover{
           background-color: #EF5407;
           transition: .3s ease-in-out; 
        }
    }
`

export const ErrorSpan = styled(motion.span)`
    color: red;
    width: 80%;
    margin-top: .3rem;
    border-radius: .3rem;
    padding: .4rem .7rem;
    justify-content: center;
    background-color: #FFA0A0;
    color: #fff;
`


// ------------------ Homepage ----------------- 


export const Container = styled.section`
    position:relative; 
    top: 100px;
    margin: 0 auto;
    width: 80%; 
    height: 80%;
    max-height: 700px;
    overflow-y: scroll;
    background-color: #fff;
    display: flex;
    align-items-center;
    justify-content: center;
    box-shadow: 1rem 3rem 3rem rgba(0,0,0,.3);
`
export const Wrapper = styled.div`
    width: 90%;
    display:flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const CardContainer = styled.div`
    flex 0 0 30%;
    min-width: 200px; 
    background-color #e7eff9;
    border-radius: .3rem;
    margin-top: 1rem;
    overflow: hidden;
    @media screen and (max-width: 1000px) {
        flex: 0 0 48%;
    }
    @media screen and (max-width: 600px) {
        flex: 0 0 95%;
    }
    background-image linear-gradient(315deg, #e7eff9 0%, #cfd6e6 74%);
`

export const CardImage = styled.div`
    height: 60px;
    width: 100%;
    background-image: url('/img/space.jpg');
    background-repeat: no-repeat; 
    background-size: cover; 
    background-position: 50%;
`

export const CardWrapper = styled.div`
    margin: 0 auto;
    width: 80%;
`

export const InfoBox = styled.div`
    margin-top: .6rem;
    &:last-of-type{
        margin-bottom: .6rem;
    }
    span{
        font-weight: bold;
    }
`

export const UserLogged = styled.div`
    position: fixed; 
    top: 0;
    right: 2rem;
    padding: 1rem;
    z-index: 30;
    color: #fff;
    display:flex;
    align-items:center;
    span {
        font-size: .9rem;
        margin-left: .5rem;
    }
    svg{
        color: #EF5407;
    }
`

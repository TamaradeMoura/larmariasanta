import styled from "styled-components";
import Logo from "./image/logopronto.png";


export const HeaderLinks = styled.ul`
    margin-right: 1%;
    padding-top: 2px; 
    display: flex;
    justify-content: space-evenly;

    li {
        text-transform: uppercase;
        font-weight: bold;
        color:  #361b1b;
        font-family: 'Roboto Slab', serif;

        
    }


    a {
        padding-top: 70px;
        color: black;
        text-decoration: none;
        display: block;
        color:  #361b1b;
        text-align: center;

        @media(max-width: 640px) {
            visibility: hidden;
        }

        @media (min-width: 641px) and (max-width: 1024px) {
            visibility: hidden;
        }
    }

`

export const IgmLogo = styled.img`
    max-width: 100%;
    width: 150px;

    @media(max-width: 640px) {
       visibility: hidden;
    }

    @media (min-width: 641px) and (max-width: 1024px) {
        position: fixed;
        margin-right: 33%;
        margin-top: 3%;
        z-index: -2;
        top: 4%;
        width: 110px;
        max-width: 10%;

    }
`

export const DivBotao = styled.div`
    display: flex;
    justify-content: right;
    margin-right: 15px;


    @media(max-width: 640px) {
        background-image: url(${Logo});
        background-position: 25px 35px;
        background-size: 120px;
        background-repeat: no-repeat;
    }
    `
    
    export const BotaoToggle = styled.button`
    background-color: #ccae62;
    border: none;
    visibility: hidden;
    
    @media(max-width: 640px) {
        visibility: visible;
        margin-top: 20%;
    }

    @media (min-width: 641px) and (max-width: 1024px) {
        visibility: visible;
        margin-top: 20%;
    }
    
`

export const Menu = styled.ul`

    li{
        display: flex;
        justify-content: center;

    }

    a {
        color: #000;
        font-family: 'Roboto Slab', serif;

    }
    
    a:hover {
        color: #ccae62;
    }
`
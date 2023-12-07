import styled, { createGlobalStyle } from "styled-components";


 const EstiloGlobal = createGlobalStyle` 
    *{
        margin: 0;
        box-sizing: border-box;
        padding: 0;
        list-style: none;
    }
`

export const DivBotao1 = styled.div`
    display: flex;
    justify-content: right;
    margin-right: 20%;
    margin-top: -33px;
    position: sticky;
    z-index: 1;

    button {
        background-color: #361b1b;
        color: #fff;
        border-right: none;
        border-left: none;
        border-top: none;
        border-bottom: none;
        font-size: 15px;
        font-family: 'Roboto Slab', serif;
        text-transform: uppercase;
        cursor: pointer;
    }
    
    @media (max-width: 1024px) {
        position: relative;
        justify-content: center;
        margin-right: 0;
    }
`


export const DivBotao2 = styled.div`
    display: flex;
    justify-content: right;
    margin-right: 5%;
    margin-top: -23px;
    position: sticky;
    z-index: 1;

    button {
        background-color: #361b1b;
        border-right: none;
        border-left: none;
        border-top: none;
        border-bottom: none;
        color: #fff;
        font-size: 15px;
        font-family: 'Roboto Slab', serif;
        text-transform: uppercase;
        cursor: pointer;
    }
    
    @media (max-width: 1024px) {
        position: relative;
        top: -50px;
        justify-content: center;
        margin-right: 0;
    }
`

export default EstiloGlobal;
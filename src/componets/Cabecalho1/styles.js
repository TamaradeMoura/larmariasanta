import styled from "styled-components";

export const Cabecalho = styled.header`
    display: flex;
    justify-content: space-evenly;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: #361b1b;
    padding-top: 5px;
    padding-bottom: 5px;

    @media (max-width: 640px) {
        display: block;
        position: relative;
    }

    @media (min-width: 641px) and (max-width: 1023px) {
        display: block;
        position: relative;
        
    }

    h1 {
        color: #fff;
        font-size: 20px;
        font-family: 'Roboto Slab', serif;

        @media (max-width: 640px) {
            font-size: 10px;
            display: block;
            margin-left: 25%;
        }

        @media (min-width: 641px) and (max-width: 1023px) {
            font-size: 16px;
            display: block;
            margin-left: 30%;
        }
    }

    h2 {
        color: #fff;
        font-size: 20px;
        font-family: 'Roboto Slab', serif;

        @media (max-width: 640px) {
            margin-left: 15%;
        }

        @media (min-width: 641px) and (max-width: 1023px) {
            margin-left: 35%;
        }
    }
`

export const BotaoModal2 = styled.button`
    background-color: #361b1b;
    color: #fff;
    border: none;
    font-family: 'Roboto Slab', serif;
    font-size: 19px;
    
    @media (max-width: 640px) {
        margin-left: 31%;
    }

    @media (min-width: 641px) and (max-width: 1023px) {
        margin-left: 44%;
    }

`

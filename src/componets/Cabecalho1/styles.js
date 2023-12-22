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
        
    }


    h1 {
        color: #fff;
        font-size: 20px;
        font-family: 'Roboto Slab', serif;

        @media (max-width: 640px) {
            visibility: hidden;
        }
    }

    h2 {
        color: #fff;
        font-size: 20px;
        font-family: 'Roboto Slab', serif;

        @media (max-width: 640px) {
            visibility: hidden;
        }
    }
`

export const BotaoModal1 = styled.button`
    position: relative;
    left: 9%;
    background-color: #361b1b;
    color: #fff;
    border: none;
    font-family: 'Roboto Slab', serif;
    font-size: 19px;
    margin-top: -5px;

    @media (max-width: 640px) {
        margin-left: -4%;
    }

`

export const BotaoModal2 = styled.button`
    background-color: #361b1b;
    color: #fff;
    border: none;
    font-family: 'Roboto Slab', serif;
    font-size: 19px;
    margin-top: -5px;
    
    @media (max-width: 640px) {
        margin-left: 12%;
    }

`

import styled from "styled-components";

export const Modal1 = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0,0,0, 0.9);
    z-index: 2;

    @media(max-width: 640px) {
        visibility: hidden;
    `

    export const Gallery = styled.ul`
        display: flex;
        aling-items: center;
        justify-content: center;
        margin-top: 5%;

        img {
            width: 900px;
        }
    `

    export const BotaoFechar = styled.div`
        float: right;
        
        button {
            background-color: rgb(0,0,0, 0.9);
            color: #fff;
            font-size: 25px;
            border: none;
            margin-right: 10px;

        }

    `
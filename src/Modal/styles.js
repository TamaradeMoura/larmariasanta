import styled from "styled-components";

export const Div = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0,0,0, 0.7);
    z-index: 500;
    `

    export const Modal = styled.form`
        position: fixed;
        background-color: #fff;
        width: 50%;
        height: 100%;
        top: 1%;
        left: 25%;
        overflow: scroll;

        @media(max-width: 640px) {
            width: 80%;
            height: 100%;
            left: 40px;
            padding-bottom: 5px;
        }

        @media(min-width: 641px) and (max-width: 1023px) {
            height: 96%;
        }
    `

    export const Form1 = styled.div`
        display: block;
        font-family: 'Roboto Slab', serif;
        text-underline-offset: 15px;

        h1 {
            display: flex;
            justify-content: center;
        }

        h2 {
            margin-left: 1%;
        }

        label {
            display: flex;
            margin-top: 1%;
            margin-left: 2%;
        }

        input {
            margin-top: 1%;
            margin-left: 2%;
            height: 30px;
            width:95%;
            box-sizing: border-box;
            border: 2px solid #ccc;
            -webkit-transition: 0.5s;
            transition: 0.5s;
            outline: none;
            padding-left: 5px;
            font-family: 'Roboto Slab', serif;

        }
        
        input:focus {
            border: 2px solid #555;
        }

        textarea {
            margin-top: 1%;
            margin-left: 2%;
            height: 100px;
            width: 95%;
            box-sizing: border-box;
            border: 2px solid #ccc;
            -webkit-transition: 0.5s;
            transition: 0.5s;
            outline: none;
            padding-left: 5px;
            font-family: 'Roboto Slab', serif;
            resize: none;
        }

        textarea:focus {
            border: 2px solid #555;
        }
    `
    export const Botao2 = styled.button`
        margin-left: 2%;
        background-color: #8f7d4f;
        color: #fff;
        width: 90px;
        height: 40px;
        border: none;
        border-radius: 50px;
        font-family: 'Roboto Slab', serif;
        cursor: pointer;

    button:hover {
        background-color: #dbbf78;
    }

    @media(max-width: 640px) {
        margin-bottom: 2%;
    }

    @media(min-width: 641px) and (max-width: 1023px) {
        margin-bottom: 2%;
    }
    `

    export const Container = styled.div`
        background-color: yellow;
        margin-top: 1%;
        margin-left: 5%;
        margin-right: 5%;
        display: flex;
        justify-content: center;
    `

    export const BotaoFechar =  styled.button`
    float: right;
    background-color: #fff;
    font-size: 25px;
    border: none;
    margin-right: 10px;
`
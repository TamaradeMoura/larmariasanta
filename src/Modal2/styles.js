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
        width: 60%;
        height: 70%;
        top: 10%;
        left: 20%;
    `
    export const Form = styled.div`
        display: block;
        font-family: 'Roboto Slab', serif;
        text-underline-offset: 15px;
        margin-top: 3%;

        h2 {
            display: flex;
            justify-content: center;
        }

        h4 {
            display: flex;
            justify-content: center;
            margin-top: 2%;
            text-decoration: underline;
            text-decoration-color: #8f7d4f;
            text-decoration-thickness: 5px;
        }

        label {
            display: flex;
            padding-top: 10px;
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
    export const Botao = styled.button`
        float: left;
        margin-left: 35px;
        margin-top: 2%;
        background-color: #8f7d4f;
        color: #fff;
        width: 120px;
        height: 50px;
        border: none;
        border-radius: 50px;
        font-family: 'Roboto Slab', serif;
        cursor: pointer;

        :hover {
            background-color: #dbbf78;
    }
    `

    export const BotaoFechar =  styled.button`
        float: right;
        background-color: #fff;
        font-size: 25px;
        border: none;
        margin-right: 10px;
    `

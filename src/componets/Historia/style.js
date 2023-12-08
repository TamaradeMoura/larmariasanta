import styled from "styled-components";

export const Frente = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5%;
    padding-bottom: 15%;

    img {
        width: 500px;
    }
`

export const Historia = styled.div`
    padding-left: 5%;

    h1 {
        font-family: 'Roboto Slab', serif;
        text-decoration: underline;
        text-underline-offset: 15px;
        font-size: 30px;
        color: #361b1b;
    }

    p {
        width: 50%;
        margin-top: 10%;
        text-align: justify;
    }
`

export const Button1 = styled.button`
    border-radius: 20px;
    padding: 10px 20px;
    margin-top: 5%;
    border: none;
    background-color: #ccae62 ;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    font-family: 'Roboto Slab', serif;
    text-aling: center;

    @media(max-width: 640px) {
        border-radius: 20px;
        width: 220%;
        height: 90%;
    }
`

export const Button2 = styled.button`
    border-radius: 20px;
    padding: 10px 20px;
    margin-top: 10%;
    margin-left: 5px;
    border: none;
    background-color: #09cc3a;
    color: white;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    font-family: 'Roboto Slab', serif;
    text-decoration: none;

    @media(max-width: 640px) {
        border-radius: 20px;
        width: 220%;
        height: 90%;
   `
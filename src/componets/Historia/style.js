import styled from "styled-components";

export const Frente = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5%;
    padding-bottom: 15%;

    img {
        margin-top: 17%;
        width: 500px;
        margin-left: 5%;
    }

    @media(max-width: 640px) {
        display: block;

        img {
            width: 375px;
            margin-left: 0;
        }
    }

    animation: appear 6s ease-in-out;
    animation-timeline: view();
    animation-range: cover 0% cover 20%;

    @keyframes appear {
        from {
            opacity: 0;
            translate: -100vw 0;
        }
    
        to {
            opacity: 1;
            translate: 0 0;
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
        margin-top: 5%;
        text-align: justify;
    }

    @media(max-width: 640px) {
        h1 { 
            margin-left: 16%;
        }

        p {
            margin-left: 20%;
        }
    
`

export const Button2 = styled.button`
    border-radius: 20px;
    padding: 10px 20px;
    margin-top: 2%;
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
        width: 90%;
        height: 90%;
        margin-left: 5%;
   `
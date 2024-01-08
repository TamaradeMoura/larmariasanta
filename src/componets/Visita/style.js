import styled from "styled-components";
import ImagemLogo from '../Cabecalho2/image/logomarca2.png'

export const Virtual = styled.section`
    display: block;
    text-align: center;
    background-image: url(${ImagemLogo});
    background-size: 620px;
    background-repeat: no-repeat;
    background-position: right;
    background-color: #7e6a3a;
    margin-top: 20%;    

    h1 {
        padding-top: 5%;
        display:block;
        text-align: center;
        text-transform: uppercase;
        font-size: 25px;
        color:  #fff;
        font-family: 'Roboto Slab', serif;
        text-decoration: underline;
        text-underline-offset: 20px;
        }


    @media(max-width: 640px) {
        background-size: 450px;
        background-position: center;
    }


    @media (min-width: 641px) and (max-width: 1024px) {
        background-image: url(${ImagemLogo});
        background-size: 520px;
        background-repeat: no-repeat;
        background-position: right;
        background-color: #8f7d4f;
        margin-top: 20%;

    animation: appear 2s ease-in-out;
    animation-timeline: view();
    animation-range: cover 0% cover 10%;

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
export const TextVisita = styled.div`
    display: block;
    padding-top: 20px;
    font-family: 'Roboto Slab', serif;

    p {
        text-align: center;
        font-size: 16px;
        color: #fff;
    }
`

export const Buttons = styled.div`
    display: grid;
    grid-column: 1fr ;
    align-items: center;
    padding-left: 45%;
    padding-right: 45%;
    margin-top: 2%;
    padding-bottom: 5%;


    @media(max-width: 640px) {
        position: relative;
        right: 9%;
        padding-left: 30%;
        padding-right: 49%;
        margin-top: 2%;
        padding-bottom: 5%;
    }

    animation: appear 2s ease-in-out;
    animation-timeline: view();
    animation-range: cover 0% cover 10%;

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

export const Button2 = styled.button`
    border-radius: 20px;
    padding: 10px 20px;
    width: 200px;
    margin-top: 10%;
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
    }
`
export const Frame = styled.iframe`
    width: 720px; 
    height: 420px;

    @media(max-width: 640px) {
        left: 4%;
        width: 350px; 
        height: 220px;
    }

    @media (min-width: 641px) and (max-width: 1024px) {
        position: static;
        width: 120px; 
        height: 200px;
    }

    animation: appear 2s ease-in-out;
    animation-timeline: view();
    animation-range: cover 0% cover 10%;

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
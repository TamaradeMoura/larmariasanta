import styled from "styled-components";
import ImagemLogo from '../Cabecalho2/image/logomarca2.png'


export const Servicos = styled.section`
background-image: url(${ImagemLogo});
background-size: 620px;
background-repeat: no-repeat;
background-position: right;
background-color: #7e6a3a;
margin-top: 20%; 
`

export const Titulo = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 5%;
    font-family: 'Roboto Slab', serif;
    text-decoration: underline;
    text-underline-offset: 15px;
    font-size: 25px;
    color:#fff;
    letter-spacing: 0.5px;
    animation: appear 3s ease-in-out;
    animation-timeline: view();
    animation-range: cover 0% cover 30%;

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

export const ServicosGrid = styled.div`
    display: grid;
    justify-content: space-evenly;
    aling-items: start;
    justify-items: center;
    grid-template-columns: 70px 70px 70px;
    column-gap: 15px;
    row-gap: 15px;
    padding-top: 7%;
    padding-bottom: 10%;
`

export const Animation = styled.div`
    .servicos-text {
    font-size: 20px;
    color: #fff;
    font-family: 'Roboto Slab', serif;
    }

    color: #ccae62;
    animation: appear -6s ease-in-out;
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

    
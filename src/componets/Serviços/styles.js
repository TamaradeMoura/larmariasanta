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
    justify-content: center;
    row-gap: 15px;
    grid-template-columns: 250px 250px 250px;
    grid-template-rows: 150px 150px 150px;
    justify-items: center;
    align-items: center;
    padding-top: 7%;
    padding-bottom: 10%;

    .icons2 {
        padding-left: 32px;
    }

    @media(max-width: 640px) {
        grid-template-columns: repeat(2, 1fr) ;

`

export const Animation = styled.div`
    .servicos-text {
        display: grid;
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

    
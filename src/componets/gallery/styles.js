import styled from "styled-components";

export const Galeria = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 15px;
    row-gap: 15px;
    margin-left: 20px;
    margin-right: 20px;
    padding-bottom: 2%; 

    div{
        width: 430px;
    }

    img {
        width: 450px;
        height: 280px;
        cursor: pointer;
    }

    @media(max-width: 640px) {
        margin-left: 0;
        display: block;

        img {
            width: 375px;
            padding-top: 5px;
        }

    }


    animation: appear 6s ease-in-out;
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
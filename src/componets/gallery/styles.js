import styled from "styled-components";

export const Galeria = styled.div`
    display: block;
    margin-left: 30px;
    padding-left: 30px;
    margin-right: 10px;
    padding-bottom: 2%; 


    img {
        padding-left: 10px;
        padding-top: 10px;
        width: 350px;
        height: 250px;
        cursor: pointer;
    }

    @media(max-width: 640px) {
        padding-left: 0;
        margin-left: -5px;
        display: block;

        img {
            width: 375px;
            padding-top: 5px;
        }

    }

    @media (min-width: 641px) and (max-width: 1023px) {
        display: grid;
        grid-template-columns: 340px 340px; 
        gap: 15px;
        margin: 0 10px 0 5px;

        img {
            margin-left: -5px;
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
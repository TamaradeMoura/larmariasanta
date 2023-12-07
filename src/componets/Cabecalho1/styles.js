import styled from "styled-components";

export const Cabecalho = styled.header`
    display: flex;
    justify-content: left;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: #361b1b;
    padding-top: 5px;
    padding-bottom: 5px;


    h1 {
        margin-left: 20px;
        color: #fff;
        font-size: 20px;
        font-family: 'Roboto Slab', serif;

        @media (max-width: 640px) {
            visibility: hidden;
        }

        @media (min-width: 641px) and (max-width: 1024px) {
            visibility: hidden;
        }
    }

    h2 {
        margin-left: 8%;
        color: #fff;
        font-size: 20px;
        font-family: 'Roboto Slab', serif;

        @media (max-width: 640px) {
            visibility: hidden;
        }

        @media (min-width: 641px) and (max-width: 1024px) {
            visibility: hidden;
        }


    }
    @media (max-width: 640px) {
        position: relative;
        width: 100%;
    }

    @media (min-width: 641px and max-width: 1023px) {
        position: relative;
        width: 100%;
    }
`

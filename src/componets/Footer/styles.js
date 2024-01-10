import styled from "styled-components";

export const Rodape = styled.div`
    background-color: #8f7d4f;
    margin-top: 10%;
    padding-top: 6%;
    padding-bottom: 5px;

    .footer-content {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-family: 'Roboto Slab', serif;

        @media(max-width: 640px) {
            display: block;
            margin-left: 2%;
        }

        @media(min-width: 641px) and (max-width: 1023px) {
            margin-left: 5%;
        }
    }

    @media(max-width: 640px) {
        margin-top: 60px;
    }
`
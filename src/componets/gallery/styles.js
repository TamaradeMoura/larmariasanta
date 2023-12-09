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
`
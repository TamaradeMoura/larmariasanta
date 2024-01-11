import styled from "styled-components";

export const Modal3 = styled.div`
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: rgb(0,0,0, 0.9);
z-index: 2;

@media(max-width: 640px) {
    visibility: hidden;
`

    export const App = styled.div`
        display: flex;
        aling-items: center;
        justify-content: center;

        .inner {
            display: flex;
        }

        .item {
            margin-top: 5%;
            padding: 20px 20px;

            img {
                width: 650px;
                height: 520px;
                pointer-events: none;
            }
        }

        .carousel {
            cursor: grab;
            overflow: hidden;
        }
    `

    export const BotaoFechar = styled.div`
        float: right;
        
        button {
            background-color: rgb(0,0,0, 0.9);
            color: #fff;
            font-size: 25px;
            border: none;
            margin-right: 10px;

        }

    `

import { createGlobalStyle } from "styled-components";


 const EstiloGlobal = createGlobalStyle` 
    *{
        margin: 0;
        box-sizing: border-box;
        padding: 0;
        list-style: none;


        .carousel {
            cursor: grab;
            overflow: hidden;
        }
    }

    .inner {
        display: flex;
    }
    
    .item {
        padding: 14px;
    }

    .dropdown-toggle {
        color: #fff;
    }
`

export default EstiloGlobal;
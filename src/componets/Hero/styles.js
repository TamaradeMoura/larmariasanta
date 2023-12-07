import styled from "styled-components";
import background from './images/capa-header.jpg';


export const HeroDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    

    @media(max-width: 640px) {
        display: block;
        margin-top: -110%;
        
        }
        
    }
`

export const CardHero = styled.div`
    border-radius: 5px;
    background-color: #fff;
    padding: 30px;
    margin: 20px;
    margin-top: -9%;
    width: 400px;
    height: 600px;
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);

    h2 {
        text-align: center;
        padding-top: 20px;
        text-transform: uppercase;
        text-decoration: underline;
        text-underline-offset: 5px;
        color:  #361b1b;
        font-family: 'Roboto Slab', serif;
        color:  #361b1b;
    }

    p {
        text-align: center;
        padding-top: 20px;
        font-size: large;
        line-height: 2.0;
        color:  #361b1b;
        font-family: 'Roboto Slab', serif;
        font-weight: 300;
    }

    @media(max-width: 640px) {
        width: 80%;
        height: 50%;
        margin-left: 44px;
        margin-top: 20px;
        }

   
`

export const Img = styled.div`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 30px;
    width: 100%;
    height: 860px;

    @media(max-width: 640px) {
        background-repeat: no-repeat;
        background-size: 500px 500px;
        margin-top: -110px;
    }
`

import styled from "styled-components";


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
    margin-top: -10%;
    width: 400px;
    height: 600px;
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
    
    h2 {
        text-align: center;
        padding-top: 10px;
        text-transform: uppercase;
        text-decoration: underline;
        text-underline-offset: 5px;
        color:  #361b1b;
        font-family: 'Roboto Slab', serif;
        color:  #361b1b;

        @media(min-width: 641px) and (max-width: 1023px) {
            font-size: 20px;
            }
    }

    p {
        text-align: center;
        padding-top: 10px;
        font-size: large;
        line-height: 2.0;
        color:  #361b1b;
        font-family: 'Roboto Slab', serif;
        font-weight: 300;

        @media(min-width: 641px) and (max-width: 1023px) {
            font-size: 14px;
            }
    }

    .icons {
        color: #ccae62;

        @media(max-width: 640px) {
            position: relative;
            right: 50px;
            }

        @media(min-width: 641px) and (max-width: 1023px) {
            position: relative;
            right: 84px;
            }
    }

    @media(max-width: 640px) {
        width: 80%;
        height: 100%;
        margin-left: 44px;
        margin-top: 10%;
        }

    @media(min-width: 641px) and (max-width: 1023px) {
        width: 90%;
        margin-left: 15px;
        }

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

export const Img = styled.div`
    background-image: url("https://servidor-estatico3-lilac.vercel.app/capa-header2.jpg");
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

    @media(min-width: 641px) and (max-width: 1023px) {
        background-position: -105px 25px;
        }
`

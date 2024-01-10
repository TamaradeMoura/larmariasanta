import styled from "styled-components";

export const Informacao = styled.div`
    display: flex;
    text-aling: center;
    text-decoration: underline;
    text-underline-offset: 15px;
    margin-left: 15%;
    margin-top: 3%;
    font-family: 'Roboto Slab', serif;

    
    @media(max-width: 640px) {
        text-decoration: underline;
        text-underline-offset: 5px;
        margin-left: 25%;
    }

    @media(min-width: 641px) and (max-width: 1023px) {
        text-decoration: underline;
        text-underline-offset: 5px;
        margin-left: 5%;
` 

export const RowInfos =styled.div`
    display: flex;
    justify-content: left;
    margin-left: 5%;

    
    @media(max-width: 640px) {
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media(min-width: 641px) and (max-width: 1023px) {
        margin-left: 1%;
`

export const CardInfos = styled.div`
    border-radius: 5px;
    background-color: #fff;
    padding: 30px;
    margin: 20px;
    margin-top: 3%;
    width: 700px;
    height: 600px;
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);

    @media(max-width: 640px) {
        width: 300px;
        height: 560px;  
    }

    @media(min-width: 641px) and (max-width: 1023px) {
        width: 550px;
        height: 650px;
`

export const CardTitle = styled.div`
    padding-left: 20px;
    font-family: 'Roboto Slab', serif;

    
    @media(max-width: 640px) {
        padding-left: 0;
    }
`

export const CardElement = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding-top: 20px;
    row-gap: 20px;

    .formulario {
        height: 40px;
        border: none;
        -webkit-transition: 0.1s;
        transition: 0.1s;
        outline: none;
        padding-left: 5px;
        font-family: 'Roboto Slab', serif;
    }

    .formulario:focus {
        border: 2px solid #555;
    }

    .msg {
        padding-left: 5px;
        resize: none;
        border: none;
        -webkit-transition: 0.1s;
        transition: 0.1s;
        outline: none;
        padding-left: 5px;
        font-family: 'Roboto Slab', serif;

        @media(max-width: 640px) {
            height: 150px;  
        }
    }

    .msg:focus {
        border: 2px solid #555;
    }
    
    button {
        border-radius: 20px;
        margin-top: -1%;
        padding: 10px 20px;
        border: none;
        background-color: #ccae62 ;
        color: #fff;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        font-family: 'Roboto Slab', serif;
        width: 30%;

        @media(max-width: 640px) {
            margin-top: 1%;
            margin-left: 2%;
            padding: 5px 5px;
            width: 150px;
        }

        @media(min-width: 641px) and (max-width: 1023px) {
            width: 160px;
            height: 50px;
            padding: 5px 5px;
    }
     
    Button:hover {
        background-color:#dbbf78;
    }
`

export const Contact = styled.div`
    display: block;
    margin-top: -44px;
    margin-left: 3%;
    font-family: 'Roboto Slab', serif;

    .title-contact {
        text-decoration: underline;
        text-underline-offset: 15px;
    }

    @media(max-width: 640px) {
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media(min-width: 641px) and (max-width: 1023px) {
        margin-left: 1%;

        .title-contact {
            margin-left: 20px;
            margin-top: 2px;
            text-underline-offset: 5px;

        }
`

export const ContactInfos = styled.div`
    padding-top: 15%;

    .linkspad {
        padding-top: 35px;
    }
`

export const Button1 = styled.button`
    padding: 10px 20px;
    margin-top: 5%;
    border: none;
    background-color: #ccae62 ;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    font-family: 'Roboto Slab', serif;
    width: 15%;
    border-radius: 50%;
    margin-left: 5px;

        @media(max-width: 640px) {
            width: 50px;
        }

        @media(min-width: 641px) and (max-width: 1023px) {
            width: 50px;
        }
`

export const Infos2 = styled.div`
    display: flex;
    justify-content: left;
    margin-left: 7%;
    margin-top: 3%;
    font-family: 'Roboto Slab', serif;
    text-decoration: underline;
    text-underline-offset: 15px;

    @media(max-width: 640px) {
        margin-top: 40px;
        margin-left: 25%;
    }

    @media(min-width: 641px) and (max-width: 1023px) {
        margin-left: 5%;
    }
`

export const RowForm = styled.div`
    display: flex;
    justify-content: left;
    margin-left: 5%;

    @media(max-width: 640px) {
        margin-left: 1%;
    }

    @media(min-width: 641px) and (max-width: 1023px) {
        margin-left: 1%;
    }

    .card-form {
        border-radius: 5px;
        background-color: #fff;
        padding: 30px;
        margin: 20px;
        margin-top: 3%;
        width: 700px;
        height: 100px;
        box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);

        @media(min-width: 641px) and (max-width: 1023px) {
            width: 400px;
        }
    }

    .btn3{
        border-radius: 20px;
        padding: 10px 20px;
        border: 2px solid #ccae62;
        background-color: #fff ;
        color: #000;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        transition: 0.4s;
        font-family: 'Roboto Slab', serif;
    }
    
    .btn3:hover {
        background-color: #ccae62;
        color: #fff;
    }

    @media(max-width: 640px) {
        margin-top: 30px;
        margin-left: 1%;
    }
`
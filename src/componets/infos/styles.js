import styled from "styled-components";

export const Informacao = styled.div`
    display: flex;
    justify-content: left;
    margin-left: 7%;
    margin-top: 3%;
    font-family: 'Roboto Slab', serif;
    text-decoration: underline;
    text-underline-offset: 15px;

    
    @media(max-width: 640px) {
        text-decoration: none;
` 

export const RowInfos =styled.div`
    display: flex;
    justify-content: left;
    margin-left: 5%;

    
    @media(max-width: 640px) {
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
`

export const CardTitle = styled.div`
    padding-left: 20px;
    font-family: 'Roboto Slab', serif;

    
    @media(max-width: 640px) {
        padding-left: 0;
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

    .msg {
        padding-left: 5px;
        resize: none;
        border: none;
        -webkit-transition: 0.1s;
        transition: 0.1s;
        outline: none;
        padding-left: 5px;
        font-family: 'Roboto Slab', serif;
        
    }
    
    button {
        border-radius: 20px;
        margin-top: -5%;
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
            margin-top: 75%;
            margin-left: -9%;
            padding: 5px 5px;
            width: 150px;
            
        }

    }
     
    Button:hover {
        background-color:#dbbf78;
    }

    @media(max-width: 640px) {
        width: 255px;
        height: 55px;
        
    }
`

export const Contact = styled.div`
    position: relative;
    bottom: 40px;
    left: 5%;
    font-family: 'Roboto Slab', serif;

    .title-contact {
        text-decoration: underline;
        text-underline-offset: 15px;
    }

    @media(max-width: 640px) {
        left: -335px;
        top: 650px;
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
        position: relative;
        top: 580px;
    }
`

export const RowForm = styled.div`
    display: flex;
    justify-content: left;
    margin-left: 5%;

    @media(max-width: 640px) {
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
        position: relative;
        top: 600px;
        margin-left: 1%;
    }
`
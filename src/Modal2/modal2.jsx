/* eslint-disable react/prop-types */
import { Div, Modal, Form, Botao } from './styles';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Modal2({isOpen}) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault();

        if(name === '' || email === '' || phone === '' || message === ''){
            alert("Preencha todos os campos");
            return;
        }

        const templateParams = {
            name: name,
            phone: phone,
            email: email,
            message: message
        }

        emailjs.send("service_eo1kwcj", "template_2h6klxe", templateParams, "xlYLyH59l4-yWP-Y2")
        .then(() => {
            setName('')
            setPhone('')
            setEmail('')
            setMessage('')
        })
    }
    
    if(isOpen) {
        return (
            <Div>
                <Modal onSubmit={sendEmail}>
                    <Form>
                    <h2>Informação sobre Hospedagem</h2>
                    <h4>Preencha os campos abaixo para entrarmos em contato</h4>
                        <label>Nome*</label>
                        <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
                        <label>Email*</label>
                          <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}/>
                        <label>Telefone para contato*</label>
                        <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone}/>
                        <label>Sua mensagem</label>
                        <textarea onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                        <Botao>Enviar Mensagem</Botao>
                    </Form>
                </Modal>
            </Div>
        )
    }
}
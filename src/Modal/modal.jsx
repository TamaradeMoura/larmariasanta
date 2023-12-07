import { Div, Modal, Form1, Container, Botao2 } from './styles';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
// eslint-disable-next-line react/prop-types
export default function Modal1({isOpen}) {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [exp1, setExp1] = useState('')
    const [exp2, setExp2] = useState('')
    const [exp3, setExp3] = useState('')
    const [exp4, setExp4] = useState('')
    const [vaga, setVaga] = useState('')
    const [date, setDate] = useState('')
    const [end, setEnd] = useState('')
    const [peri1, setPeri1] = useState('')
    const [peri2, setPeri2] = useState('')
    const [peri3, setPeri3] = useState('')
    const [peri4, setPeri4] = useState('')
    const [school, setSchool] = useState('')
    const [message1, setMessage1] = useState('')
    const [message2, setMessage2] = useState('')
    const [message3, setMessage3] = useState('')
    const [message4, setMessage4] = useState('')
    const [message5, setMessage5] = useState('')


    function sendEmail(e){
        e.preventDefault();
        
        if(name === '' || email === '' || exp1 === '' || exp2 === '' || exp3 === '' || exp4 === '' || phone === '' || vaga === '' || date === '' || school === '' || peri1 === '' || peri2 === '' || peri3 === '' || peri4 === '' || end === '' || message1 === '' || message2 === '' || message3 === '' || message4 === '' || message5 === ''){
            alert("Preencha todos os campos");
            return;
        }

        const templateParams = {
            name: name,
            phone: phone,
            exp1: exp1,
            exp2: exp2,
            exp3: exp3,
            exp4: exp4,
            vaga: vaga,
            date: date,
            end: end,
            peri1: peri1,
            peri2: peri2,
            peri3: peri3,
            peri4: peri4,
            school: school,
            message1: message1,
            message2: message2,
            message3: message3,
            message4: message4,
            message5: message5,
            email: email,
        }

        emailjs.send("service_wlycsde", "template_4jnui0y", templateParams, "xlYLyH59l4-yWP-Y2")
        .then(() => {
            setName('')
            setEmail('')
            setPhone('')
            setExp1('')
            setExp2('')
            setExp3('')
            setExp4('')
            setVaga('')
            setDate('')
            setPeri1('')
            setPeri2('')
            setPeri3('')
            setPeri4('')
            setSchool('')
            setEnd('')
            setMessage1('')
            setMessage2('')
            setMessage3('')
            setMessage4('')
            setMessage5('')
        })

    }
    if(isOpen) {

        return (
            <Div>
                <Modal onSubmit={sendEmail}>
                    <Form1>
                    <h1>Trabalhe conosco</h1>
                    <Container>
                    <p>
                        Este formulário é o único canal para envio de currículos.
                        FAVOR NÃO ENTRAR EM CONTATO POR WHATSAPP OU TELEFONE.
                    </p>
                    </Container>
                    <label>Nome completo*</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                    <label>Email*</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <label>Telefone*</label>
                    <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} />
                    <label>Data de nascimento*</label>
                    <input type="text" onChange={(e) => setDate(e.target.value)} value={date} />
                    <label>Endereço*</label>
                    <input type="text" onChange={(e) => setEnd(e.target.value)} value={end} />
                    <label>Vaga de interesse*</label>
                    <input type="text" onChange={(e) => setVaga(e.target.value)} value={vaga} />
                    <h2>Últimas experiências</h2>
                    <label>Experiência 1*</label>
                    <input type="text" onChange={(e) => setExp1(e.target.value)} value={exp1} />
                    <label>Período de trabalho*</label>
                    <input type="text" onChange={(e) => setPeri1(e.target.value)} value={peri1} />
                    <label>Principais Atividades*</label>
                    <textarea onChange={(e) => setMessage1(e.target.value)} value={message1} ></textarea>
                    <label>Experiência 2*</label>
                    <input type="text" onChange={(e) => setExp2(e.target.value)} value={exp2} />
                    <label>Período de trabalho*</label>
                    <input type="text" onChange={(e) => setPeri2(e.target.value)} value={peri2} />
                    <label>Principais Atividades*</label>
                    <textarea onChange={(e) => setMessage2(e.target.value)} value={message2} ></textarea>
                    <label>Experiência 3*</label>
                    <input type="text" onChange={(e) => setExp3(e.target.value)} value={exp3} />
                    <label>Período de trabalho*</label>
                    <input type="text" onChange={(e) => setPeri3(e.target.value)} value={peri3} />
                    <label>Principais Atividades*</label>
                    <textarea onChange={(e) => setMessage3(e.target.value)} value={message3} ></textarea>
                    <label>Experiência 4*</label>
                    <input type="text" onChange={(e) => setExp4(e.target.value)} value={exp4} />
                    <label>Período de trabalho*</label>
                    <input type="text" onChange={(e) => setPeri4(e.target.value)} value={peri4} />
                    <label>Principais Atividades*</label>
                    <textarea onChange={(e) => setMessage4(e.target.value)} value={message4} ></textarea>
                    <label>Escolaridade*</label>
                    <input type="text" onChange={(e) => setSchool(e.target.value)} value={school} />
                    <label>Cursos complementares*</label>
                    <textarea onChange={(e) => setMessage5(e.target.value)} value={message5} ></textarea>
                    <Botao2 type='submit'>Enviar</Botao2>
                    </Form1>
                </Modal>
            </Div>
        )
    }
    }
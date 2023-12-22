import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Button1, CardElement, CardInfos, CardTitle, Contact, ContactInfos, Informacao, Infos2, RowForm, RowInfos } from './styles';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Modal1 from '../../Modal/modal';


function Infos() {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [openModal1, setOpenModal1] = useState(false)
  
  
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
    return (
        <section id='infos'>
        <Informacao>
          <h2>Informação sobre Hospedagem</h2>
        </Informacao>
        <RowInfos>
          <CardInfos>
            <CardTitle>
            <h4>Preencha os campos e envie a sua mensagem. Aguardamos o seu contato.</h4>
            </CardTitle>
              <form onSubmit={sendEmail}>
              <CardElement>
              <input type="text" placeholder='Nome' className='formulario' onChange={(e) => setName(e.target.value)} value={name} />
              <input type="text" placeholder='E-mail' className='formulario' onChange={(e) => setEmail(e.target.value)} value={email}/>
              <input type="text" placeholder='Telefone/WhatsApp' className='formulario' onChange={(e) => setPhone(e.target.value)} value={phone}/>
              <textarea name="Mensagem" id="Mensagem" cols="30" rows="10" placeholder='Mensagem' className='msg' onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
              <button>Enviar Mensagem</button>
              </CardElement>
              </form>
        </CardInfos>
          <Contact>
            <h2 className='title-contact'>Dados de contato</h2>
            <ContactInfos>
              <nav>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faLocationDot} transform="left-5" />
                      Av. Frederico Dihl, 404, Bela Vista, Alvorada
                  </li>
                  <li className='linkspad'>
                    <FontAwesomeIcon icon={faEnvelope} transform="left-8"/>
                      larmariasanta@hotmail.com
                  </li>
                  <li className='linkspad'>
                    <FontAwesomeIcon icon={faPhone} transform="left-7"/>
                    (51) 3442.0638
                  </li>
                  <li className='linkspad'>
                    <FontAwesomeIcon icon={faWhatsapp} transform="left-5"/>
                    (51) 98966.2711
                  </li>
                  <li className='linkspad'>
                    <FontAwesomeIcon icon={faFacebook} transform="left-5"/>
                    /larmariasanta
                  </li>
                  <li className='linkspad'>
                    <FontAwesomeIcon icon={faInstagram} transform="left-5"/>
                    /larmariasanta
                  </li>
                  <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5551980226143">
                  <Button1>
                  <FontAwesomeIcon icon={faWhatsapp} size='2x' transform="left-4" />
                  </Button1></a>
                  <Button1>
                  <FontAwesomeIcon icon={faPhone} size='2x' transform="left-5" />
                  </Button1>
                </ul>
              </nav>
            </ContactInfos>
          </Contact>
        </RowInfos>
        <Infos2>
          <h2>Canal exclusivo</h2>
        </Infos2>
        <RowForm>
        <div className='card-form'> 
              <button className='btn3' onClick={() => setOpenModal1(true)}>Trabalhe conosco</button>
              <Modal1 isOpen={openModal1} setModalOpen={() => setOpenModal1(!openModal1)} />
              </div>
        </RowForm>
      </section>
    )
}

export default Infos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { faWheelchair } from '@fortawesome/free-solid-svg-icons';
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShield } from '@fortawesome/free-solid-svg-icons';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { GoogleMap, useJsApiLoader,  MarkerF } from '@react-google-maps/api';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import Header1 from './componets/Cabecalho1';
import { useState } from 'react';
import Modal2 from './Modal2/modal2';
import Modal1 from './Modal/modal';
import EstiloGlobal, { DivBotao1, DivBotao2 } from './styles';
import Header2 from './componets/Cabecalho2';
import Hero from './componets/Hero';
import Visita from './componets/Visita';




function App() {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBTPkTheruN4-cL-kw4nHybSPSPWk0A2-g"
  });

  const position = {
    lat: -30.01197925004711,
    lng: -51.08479501142353
  }

  const [openModal1, setOpenModal1] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)

  return (
    <>
      <EstiloGlobal />
      <Header1 />
      <DivBotao1>
          <button onClick={() => setOpenModal1(true)}>Trabalhe conosco</button>
      </DivBotao1>
          <Modal1 isOpen={openModal1} setModalOpen={() => setOpenModal1(!openModal1)} />
          <DivBotao2>
          <button onClick={() => setOpenModal2(true)}>Entre em contato</button>
      </DivBotao2>
          <Modal2 isOpen={openModal2} />
      <Header2 />
      <Hero  />
      <Visita />
      <section>
        <div className='lar'>
          <img src='https://via.placeholder.com/500x720' alt="imagem em branco" />
          <div className='hist-lar'>
            <h1 className='titulo-lar'>Nossa História</h1>
            <p className='text-lar'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br></br>
              Nam eveniet asperiores porro nostrum, <br></br>
              vitae fugit praesentium quod tenetur, debitis laudantium culpa assumenda odio ab, <br></br>
              a veritatis consequuntur nobis rerum pariatur!
            </p>
            <button className='btn1 btn-btn1'>Saiba Mais</button>
            <button className='btn2 btn-btn1'>
              <FontAwesomeIcon icon={faWhatsapp} transform="left-5" />
              Entre em contato</button>
          </div>
        </div>
      </section>
      <section>
        <div className='gallery-grid'>
          <div className='grid-item'>
            <img src='https://via.placeholder.com/460x255' alt='imagem em branco'></img>
          </div>
          <div className='grid-item'>
            <img src='https://via.placeholder.com/460x255' alt='imagem em branco'></img>
          </div>
          <div className='grid-item'>
            <img src='https://via.placeholder.com/460x255' alt='imagem em branco'></img>
          </div>
          <div className='grid-item'>
            <img src='https://via.placeholder.com/460x255' alt='imagem em branco'></img>
          </div>
          <div className='grid-item'>
            <img src='https://via.placeholder.com/460x255' alt='imagem em branco'></img>
          </div>
          <div className='grid-item'>
            <img src='https://via.placeholder.com/460x255' alt='imagem em branco'></img>
          </div>
          <div className='grid-item'>
            <img src='https://via.placeholder.com/460x255' alt='imagem em branco'></img>
          </div>
          <div className='grid-item'>
            <img src='https://via.placeholder.com/460x255' alt='imagem em branco'></img>
          </div>
          <div className='grid-item'>
            <img src='https://via.placeholder.com/460x255' alt='imagem em branco'></img>
          </div>
          <div className='grid-item'>
            <img src='https://via.placeholder.com/460x255' alt='imagem em branco'></img>
          </div>
          <div className='grid-item'>
            <img src='https://via.placeholder.com/460x255' alt='imagem em branco'></img>
          </div>
        </div>
      </section>
      <section id='servicos'>
        <div className='titulo'>
          <h1>Serviços</h1>
        </div>
        <div className='servicos-grid'>
          <div className='cares'>
            <FontAwesomeIcon icon={faUser} size='4x' className='icons2' transform='right-5' />
            <span className='servicos-text'>Cuidadores</span>
          </div>
          <div className='doc'>
            <FontAwesomeIcon icon={faUserDoctor} size='4x' className='icons2' transform='right-2' />
            <span className='servicos-text'>Medico</span>
          </div>
          <div className='fisio'>
            <FontAwesomeIcon icon={faWheelchair} size='4x' className='icons2' transform='right-5' />
            <span className='servicos-text'>Fisioterapia</span>
          </div>
          <div className='puzzle'>
            <FontAwesomeIcon icon={faPuzzlePiece} size='4x' className='icons2' transform='right-5' />
            <span className='servicos-text'>Recreação</span>
          </div>
          <div className='love'>
            <FontAwesomeIcon icon={faHeart} size='4x' className='icons2' transform='right-2' />
            <span className='servicos-text'>Amor e cuidado</span>
          </div>
          <div className='nutri'>
            <FontAwesomeIcon icon={faAppleWhole} size='4x' className='icons2' transform='right-4' />
            <span className='servicos-text'>Nutrição</span>
          </div>
          <div className='shield'>
            <FontAwesomeIcon icon={faShield} size='4x' className='icons2' transform='right-4' />
            <span className='servicos-text'>Segurança</span>
          </div>
        </div>
      </section>
      <section>
        <div className='map'>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '100%' }}
              center={position}
              zoom={15}
            >
              <MarkerF position={position} options={{
                label: {
                  text: "Lar Maria Santa",
                  className: "map-marker"
                }
              }} />
            </GoogleMap>
          ) : (<></>
          )}
        </div>
      </section>
      <section>
        <div className='infos'>
          <h2>Informação sobre Hospedagem</h2>
        </div>
        <div className='row-infos'>
          <div className='card-infos'>
            <div className='card-title'>
            <h4>Preencha os campos e envie a sua mensagem. Aguardamos o seu contato.</h4>
            </div>
              <form>
              <div className='card-element'>
              <input type="text" placeholder='Nome' className='form' />
              <input type="text" placeholder='E-mail' className='form'/>
              <input type="text" placeholder='Telefone/WhatsApp' className='form'/>
              <textarea name="Mensagem" id="Mensagem" cols="30" rows="10" placeholder='Mensagem' className='msg'></textarea>
              <button className='btn1 btn-btn'>Enviar Mensagem</button>
              </div>
              </form>
        </div>
          <div className='contact'>
            <h2 className='title-contact'>Dados de contato</h2>
            <div className='contact-infos'>
              <nav>
                <ul>
                  <li className='contact-links'>
                    <a href="" className='button2'>
                    <FontAwesomeIcon icon={faLocationDot} transform="left-5" />
                      Av. Frederico Dihl, 404, Bela Vista, Alvorada</a>
                  </li>
                  <li className='contact-links contact-links-pad'>
                    <a href="" className='button2'>
                    <FontAwesomeIcon icon={faEnvelope} transform="left-8" />
                      larmariasanta@hotmail.com</a>
                  </li>
                  <li className='contact-links contact-links-pad'>
                    <a href="" className='button2'>
                    <FontAwesomeIcon icon={faPhone} transform="left-7" />
                    (51) 3442.0638</a>
                  </li>
                  <li className='contact-links contact-links-pad'>
                    <a href="" className='button2'>
                    <FontAwesomeIcon icon={faWhatsapp} transform="left-5" />
                    (51) 98966.2711</a>
                  </li>
                  <li className='contact-links contact-links-pad'>
                    <a href="" className='button2'>
                    <FontAwesomeIcon icon={faFacebook} transform="left-5" />
                    /larmariasanta</a>
                  </li>
                  <li className='contact-links contact-links-pad'>
                    <a href="" className='button2'>
                    <FontAwesomeIcon icon={faInstagram} transform="left-5" />
                    /larmariasanta</a>
                  </li>
                  <button className='btn1 btn-contact'>
                  <FontAwesomeIcon icon={faWhatsapp} size='2x' transform="left-4" />
                  </button>
                  <button className='btn1 btn-contact btn-alling'>
                  <FontAwesomeIcon icon={faPhone} size='2x' transform="left-5" />
                  </button>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className='infos'>
          <h2>Canal exclusivo</h2>
        </div>
        <div className='row-form'>
        <div className='card-form'>
              <button className='btn3'>Trabalhe conosco</button>
              </div>
        </div>
      </section>
      <footer>
        <div className='footer'>
              <p className='footer-content'>
              <FontAwesomeIcon icon={faCopyright} transform="left-5px" /> Copyright  2023 Lar de idosos Maria Santa - Todos os direitos reservados -  Desenvolvido por Tamara Moura
              </p>
        </div>
      </footer>
    </>
  )
}

export default App;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Virtual, TextVisita, Buttons, Button1, Button2, Frame } from './style';
import { useState } from 'react';
import Modal2 from '../../Modal2/modal2';



function Visita(){
  const [openModal2, setOpenModal2] = useState(false)



    return (
        <Virtual id='visitavirtual'>
          <h1>Visita Virtual</h1>
        <TextVisita>
          <p>Conheça a nossa estrutura</p>
        </TextVisita>
        <Frame 
        src="https://www.youtube.com/embed/noVneUJjPRk?si=94jgFYY7jrnoUWmv" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></Frame>
        <Buttons>
          <Button1 onClick={() => setOpenModal2(true)}>Saiba Mais</Button1>
          <Modal2 isOpen={openModal2} setModalOpen={() => setOpenModal2(!openModal2)} />
          <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5551980226143"><Button2>
            <FontAwesomeIcon icon={faWhatsapp} transform="left-5" />
            Entre em contato</Button2></a>
        </Buttons>
      </Virtual>
    )
}

export default Visita
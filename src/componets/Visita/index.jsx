import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Virtual, TextVisita, Buttons, Button1, Button2, Frame } from './style';



function Visita(){
    return (
        <Virtual id='visitaVirtual'>
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
          <Button1>Saiba Mais</Button1>
          <Button2>
            <FontAwesomeIcon icon={faWhatsapp} transform="left-5" />
            Entre em contato</Button2>
        </Buttons>
      </Virtual>
    )
}

export default Visita
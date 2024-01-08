import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import FrenteLar from './images/lar.jpg';
import {  Button2, Frente, Historia } from './style';



function Lar() {

    return (
        <section id='lar'>
        <Frente>
          <div>
          <img src={FrenteLar} alt="imagem de apresentação" />
          </div>
          <Historia>
            <h1>Nossa História</h1>
            <p>
              O lar para idosos Maria Santa nasceu 
              com o propósito<br></br> 
              de um cuidado mais humanizado.<br></br>
              As duas sócias cujo pai e mãe precisavam 
              de um lugar para ficar
              decidiram unir forças e abrir um lar para os cuidados deles.<br></br>
              Com este intuito o lar Maria Santa foi criado, 
              nome dado em homenagem a falecida mãe de uma das sócias.<br></br>
              Por necessidade as duas decidiram abrir o espaço para cuidar de seus pais.<br></br>
              Proporcionando a eles espaços adaptados, cuidadores, técnicos, nutricionista, fisioterapeuta
              e acompanhamento médico.<br></br>
              Tudo com muito amor, cuidados de higiene e alimentação.<br></br>
              O lar Maria Santa é extremamente grato pela confiança das famílias e honra seu compromisso com dignidade e ética.
            </p>
            <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5551980226143">
            <Button2>
              <FontAwesomeIcon icon={faWhatsapp} transform="left-5" />
              Entre em contato</Button2></a>
          </Historia>
        </Frente>
      </section>
    )
}

export default Lar;
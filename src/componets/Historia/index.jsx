import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import FrenteLar from './images/lar.jpg';
import { Button1, Button2, Frente, Historia } from './style';
import Modal2 from '../../Modal2/modal2';



function Lar() {
    const [openModal2, setOpenModal2] = useState(false)

    return (
        <section id='lar'>
        <Frente>
          <img src={FrenteLar} alt="imagem de apresentação" />
          <Historia>
            <h1>Nossa História</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br></br>
              Nam eveniet asperiores porro nostrum, <br></br>
              vitae fugit praesentium quod tenetur, debitis laudantium culpa assumenda odio ab, <br></br>
              a veritatis consequuntur nobis rerum pariatur!
            </p>
            <Button1 onClick={() => setOpenModal2(true)}>Saiba Mais</Button1>
            <Modal2 isOpen={openModal2} setModalOpen={() => setOpenModal2(!openModal2)} />
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
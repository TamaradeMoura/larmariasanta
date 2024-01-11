import { Galeria } from "./styles";
import sala1 from './images/sala1.jpg';
import sala2 from './images/sala2.jpg';
import sala3 from './images/sala3.jpg';
import jantar1 from './images/jantar1.jpg';
import jantar2 from './images/jantar2.jpg'
import jantar3 from './images/jantar3.jpg';
import quarto1 from './images/quarto1.jpg';
import quarto2 from './images/quarto2.jpg';
import triplo1 from './images/triplo1.jpg';
import triplo2 from './images/triplo2.jpg';
import triplo3 from './images/triplo3.jpg';
import quadruplo1 from './images/quadruplo1.jpg';
import quadruplo2 from './images/quadruplo2.jpg';
import quadruplo3 from './images/quadruplo3.jpg';
import { useState } from 'react';
import Modal from "./modal3";


function Gallery() {
    const [openModal3, setOpenModal3] = useState(false)

    return (
        <section>
            <Modal isOpen={openModal3} setModalOpen={() => setOpenModal3(!openModal3)} />
        <Galeria>
            <img onClick={() => setOpenModal3(true)} src={sala1} alt='sala de estar'></img>
            <img src={sala2} alt='sala de estar'></img>
            <img src={sala3} alt='sala de estar'></img>
            <img src={quadruplo1} alt='quarto quadruplo'></img>
            <img src={quadruplo2} alt='quarto quadruplo'></img>
            <img src={quadruplo3} alt='quarto quadruplo'></img>
            <img src={triplo1} alt='quarto triplo'></img>
            <img src={triplo2} alt='quarto triplo'></img>
            <img src={triplo3} alt='quarto triplo'></img>
            <img src={quarto1} alt='quarto individual'></img>
            <img src={quarto2}  alt='quarto individual'></img>
            <img src={jantar1}  alt='sala de refeições'></img>
            <img src={jantar2}  alt='sala de refeições'></img>
            <img src={jantar3}  alt='sala de refeições'></img>
        </Galeria>
      </section>
    )
}

export default Gallery;
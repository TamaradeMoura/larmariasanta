import { Galeria } from "./styles";
import sala1 from "./images/sala1.png";
import sala2 from "./images/sala2.png";
import sala3 from "./images/sala3.png";
import jantar1 from "./images/jantar1.png";
import jantar2 from "./images/jantar2.png";
import jantar3 from "./images/jantar3.png";
import quarto1 from "./images/quarto1.png";
import quarto2 from "./images/quarto2.png";
import triplo1 from "./images/triplo1.png";
import triplo2 from "./images/triplo2.png";
import triplo3 from "./images/triplo3.png";
import quadruplo1 from "./images/quadruplo1.png";
import quadruplo2 from "./images/quadruplo2.png";
import quadruplo3 from "./images/quadruplo3.png";
import { useState } from 'react';
import Modal2 from "../../Modal2/modal2";


function Gallery() {
    const [openModal2, setOpenModal2] = useState(false)

    return (
        <section>
            <Modal2 isOpen={openModal2} setModalOpen={() => setOpenModal2(!openModal2)} />
        <Galeria>
          <div>
            <img onClick={() => setOpenModal2(true)} src={sala1} alt='sala de estar'></img>
          </div>
          <div>
            <img src={sala2} alt='sala de estar'></img>
          </div>
          <div>
            <img src={sala3} alt='sala de estar'></img>
          </div>
          <div>
            <img src={quadruplo1} alt='quarto quadruplo'></img>
          </div>
          <div>
            <img src={quadruplo2} alt='quarto quadruplo'></img>
          </div>
          <div>
            <img src={quadruplo3} alt='quarto quadruplo'></img>
          </div>
          <div>
            <img src={triplo1} alt='quarto triplo'></img>
          </div>
          <div>
            <img src={triplo2} alt='quarto triplo'></img>
          </div>
          <div>
            <img src={triplo3} alt='quarto triplo'></img>
          </div>
          <div>
            <img src={quarto1} alt='quarto individual'></img>
          </div>
          <div>
            <img src={quarto2}  alt='quarto individual'></img>
          </div>
          <div>
            <img src={jantar1}  alt='sala de refeições'></img>
          </div>
          <div>
            <img src={jantar2}  alt='sala de refeições'></img>
          </div>
          <div>
            <img src={jantar3}  alt='sala de refeições'></img>
          </div>
        </Galeria>
      </section>
    )
}

export default Gallery;
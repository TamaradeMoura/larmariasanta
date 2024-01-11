import { motion } from "framer-motion";
import { useState, useEffect, useRef } from 'react';
import { App, BotaoFechar } from "./style";
import { Modal3 } from "./style";

import image1 from '../images/sala1.jpg'
import image2 from '../images/sala2.jpg'
import image3 from '../images/sala3.jpg'
import image4 from '../images/quarto1.jpg'
import image5 from '../images/quarto2.jpg'
import image6 from '../images/quadruplo1.jpg'
import image7 from '../images/quadruplo2.jpg'
import image8 from '../images/quadruplo3.jpg'
import image9 from '../images/jantar1.jpg'
import image10 from '../images/jantar2.jpg'
import image11 from '../images/jantar3.jpg'
import image12 from '../images/triplo1.jpg'
import image13 from '../images/triplo2.jpg'
import image14 from '../images/triplo3.jpg'



const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14]

// eslint-disable-next-line react/prop-types
function Modal({isOpen, setModalOpen}) {
    const carousel = useRef();
    const [width, setwidth] = useState(0)

    useEffect(() => {
        setwidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    })

if(isOpen) {
    return (
        <Modal3>
            <BotaoFechar>
                <button onClick={setModalOpen}>X</button>
            </BotaoFechar>
        <App>
            <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
                <motion.div 
                className="inner"
                drag="x"
                dragConstraints={{ right: 0, left: -width}}
                
                >
                    {images.map(image => (
                        <motion.div className="item" key={image}>
                            <img src={image} alt="texto alto" />
                        </motion.div>
                    ))}
    
                </motion.div>
            </motion.div>
        </App>
        </Modal3>
    );
}

}

export default Modal

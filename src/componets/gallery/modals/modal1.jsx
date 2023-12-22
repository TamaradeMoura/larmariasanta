import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BotaoFechar, Gallery, Modal1 } from './styles';
import sala1 from './images/sala1.jpg';
import sala2 from './images/sala2.jpg';
import sala3 from './images/sala3.jpg';
import quarto1 from './images/quarto1.jpg';
import quarto2 from './images/quarto2.jpg';
import quadruplo1 from './images/quadruplo1.jpg';
import quadruplo2 from './images/quadruplo2.jpg';
import quadruplo3 from './images/quadruplo3.jpg';
import jantar1 from './images/jantar1.jpg';
import jantar2 from './images/jantar2.jpg';
import jantar3 from './images/jantar3.jpg';
import triplo1 from './images/triplo1.jpg';
import triplo2 from './images/triplo2.jpg';
import triplo3 from './images/triplo3.jpg';



const images = [sala1, sala2, sala3, jantar1, jantar2, jantar3, quarto1, quarto2, quadruplo1, quadruplo2, quadruplo3, triplo1, triplo2, triplo3]

// eslint-disable-next-line react/prop-types
function Modal({isOpen, setModalOpen}) {
    const carousel = useRef();
    const [width, setwidth] = useState(0)

    useEffect(() => {
        setwidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    })

    if(isOpen) {
        
        return (
            <Modal1>
                <BotaoFechar>
                    <button onClick={setModalOpen}>X</button>
                </BotaoFechar>
            <Gallery>
                <motion.div ref={carousel} className='carousel' whileTap={{ cursor: " grabbing"}}>
                    <motion.div 
                    className='inner'
                    drag="x"
                    dragConstraints={{ right: 0, left: -width}}
                    
                    >

                        {images.map(image => (
                            <motion.div key={image} className='item'>
                                <img src={image} alt='sala de estar' />
                            </motion.div>
                        ))}

                    </motion.div>
                </motion.div>
            </Gallery>
            </Modal1>
            )      
        }
    }

export default Modal
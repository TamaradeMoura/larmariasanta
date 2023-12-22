import { BotaoModal1, BotaoModal2, Cabecalho } from './styles'
import { useState } from 'react'
import Modal1 from '../../Modal/modal'
import Modal2 from '../../Modal2/modal2'




function Header1() {

  const [openModal1, setOpenModal1] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)

  return (
  <Cabecalho>
        <h1>
          Av. Frederico Dihl, 404, Bela Vista - Alvorada
        </h1>
        <h2>(51) 3442.0638 (51) 98966.2711</h2>
        <BotaoModal1  className='botao1' onClick={() => setOpenModal1(true)}>
          Trabalhe conosco |</BotaoModal1>
        <Modal1 isOpen={openModal1} setModalOpen={() => setOpenModal1(!openModal1)} />
        <BotaoModal2 onClick={() => setOpenModal2(true)}>
          Entre em contato</BotaoModal2>
        <Modal2 isOpen={openModal2} setModalOpen={() => setOpenModal2(!openModal2)} />
    </Cabecalho>

)
}
  
  

export default Header1
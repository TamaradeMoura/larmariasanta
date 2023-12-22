import { useState } from 'react';
import imagemLogo from './image/logopronto.png';
import { BotaoToggle, DivBotao, HeaderLinks, IgmLogo, Menu } from './styles';


function Header2() {

  const useToggle = (initialState) => {
    const [toggleValue, setToggleValue] = useState(initialState);

    const toggler = () => { setToggleValue(!toggleValue)}
    return [toggleValue, toggler]
  }

    const [toggle, setToggle] = useToggle();


    return (
      <header>
        <nav>
        <DivBotao>
        <BotaoToggle
          onClick={setToggle}
          className='btn btn- mb-5'
        ><span className='navbar-toggler-icon dropdown-toggle'></span></BotaoToggle>
        </DivBotao>
        {toggle && (
          <Menu className='list-group nav'>
            <li className='list-group-item'>
                <a href="#diferenciais" className='nav-link'>Diferenciais</a>
            </li>
            <li className='list-group-item'>
                <a href="#visitavirtual" className='nav-link'>Visita Virtual</a>
            </li>
            <li className='list-group-item'>
                <a href="#lar" className='nav-link'>O lar</a>
            </li>
            <li className='list-group-item'>
                <a href="#servicos" className='nav-link'>Serviços</a>
            </li>
            <li className='list-group-item'>
              <a href="#maps" className='nav-link'>Localização</a>
            </li>
            <li className='list-group-item'>
              <a href="#infos" className='nav-link'>Contatos</a>
            </li>
          </Menu>
        )}
          <HeaderLinks>
              <IgmLogo src={imagemLogo} alt="Logo do Lar Maria Santa" />
            <li>
              <a href="#diferenciais">Diferenciais</a>
            </li>
            <li>
              <a href="#visitavirtual">Visita virtual</a>
            </li>
            <li>
              <a href="#lar">O Lar</a>
            </li>
            <li>
              <a href="#servicos">Serviço</a>
            </li>
            <li>
              <a href="#maps">Localização</a>
            </li>
            <li>
              <a href="#infos">Contatos</a>
            </li>
          </HeaderLinks>
        </nav>
      </header>
    )
}

export default Header2
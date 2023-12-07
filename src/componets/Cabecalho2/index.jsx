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
        ><span className='navbar-toggler-icon'></span></BotaoToggle>
        </DivBotao>
        {toggle && (
          <Menu className='list-group nav'>
            <li className='list-group-item'>
                <a href="" className='nav-link'>Diferenciais</a>
            </li>
            <li className='list-group-item'>
                <a href="" className='nav-link'>Visita Virtual</a>
            </li>
            <li className='list-group-item'>
                <a href="" className='nav-link'>O lar</a>
            </li>
            <li className='list-group-item'>
                <a href="" className='nav-link'>Serviços</a>
            </li>
            <li className='list-group-item'>
              <a href="" className='nav-link'>Contatos</a>
            </li>
          </Menu>
        )}
          <HeaderLinks>
              <IgmLogo src={imagemLogo} alt="Logo do Lar Maria Santa" />
            <li>
              <a href="#diferenciais">Diferenciais</a>
            </li>
            <li>
              <a href="#">Visita virtual</a>
            </li>
            <li>
              <a href="#">O Lar</a>
            </li>
            <li>
              <a href="#">Serviço</a>
            </li>
            <li>
              <a href="#">Localização</a>
            </li>
            <li>
              <a href="#">Contatos</a>
            </li>
          </HeaderLinks>
        </nav>
      </header>
    )
}

export default Header2
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { Rodape } from './styles';

function Footer() {
    return (
        <footer>
        <Rodape>
              <p className='footer-content'>
              <FontAwesomeIcon icon={faCopyright} transform="left-5px" /> Copyright  2023 Lar de idosos Maria Santa - Todos os direitos reservados -  Desenvolvido por Tamara Moura
              </p>
        </Rodape>
      </footer>
    )
}

export default Footer
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShield } from '@fortawesome/free-solid-svg-icons';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { faUserNurse } from '@fortawesome/free-solid-svg-icons';
import { Servicos, ServicosGrid, Titulo, Animation } from './styles';

function Serviços() {
    return (
        <Servicos id='servicos'>
        <Titulo>
          <h1>Serviços</h1>
        </Titulo>
        <ServicosGrid>
        <Animation>
            <FontAwesomeIcon icon={faUser} size='4x' transform='right-5' />
            <span className='servicos-text'>Cuidadores</span>
        </Animation>
         <Animation>
            <FontAwesomeIcon icon={faUserDoctor} size='4x' transform='right-2' />
            <span className='servicos-text'>Medico</span>
         </Animation>
           <Animation>
            <FontAwesomeIcon icon={faUserNurse} size='4x' transform='right-5' />
            <span className='servicos-text'>Enfermeiro</span>
           </Animation>
           <Animation>
            <FontAwesomeIcon icon={faPuzzlePiece} size='4x' transform='right-5' />
            <span className='servicos-text'>Recreação</span>
           </Animation>
           <Animation>
            <FontAwesomeIcon icon={faHeart} size='4x' className='icons2' transform='right-2' />
            <span className='servicos-text'>Amor e cuidado</span>
           </Animation>
           <Animation>
            <FontAwesomeIcon icon={faAppleWhole} size='4x' transform='right-4' />
            <span className='servicos-text'>Nutrição</span>
           </Animation>
           <Animation>
            <FontAwesomeIcon icon={faShield} size='4x' transform='right-4' />
            <span className='servicos-text'>Segurança</span>
           </Animation>
        </ServicosGrid>
      </Servicos>
    )
}

export default Serviços
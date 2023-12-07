import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { CardHero, HeroDiv, Img } from './styles';

function Hero() {
return (
    <section id='diferenciais'>
        <Img />
            <HeroDiv>
                <CardHero>
                <FontAwesomeIcon icon={faUsers} size='3x' transform='right-47' className='icons' />
                <h2>Equipe Especializada</h2>
                <p>Conheça nossa Equipe Multidisciplinar composta por cuidadores e técnicos preparados, Nutricionista, Fisioterapeuta e Médico. </p>
            </CardHero>
            <CardHero>
            <FontAwesomeIcon icon={faHandHoldingMedical} size='3x' transform='right-47' className='icons' />
                <h2>Vocação e Cuidado</h2>
                <p>O Lar Maria Santa foi criado pela necessidade e vontade de dar aos nossos idosos um cuidado digno e Ético. <br></br>
                Proporcionando a eles espaços adaptados, profissionais capacitados, cuidados de higiene e alimentação, além de muito amor e atenção.</p>
            </CardHero>
            <CardHero>
            <FontAwesomeIcon icon={faHandHoldingHeart} size='3x' transform='right-47' className='icons' />
                    <h2>Benefícios para quem se hospeda</h2>
                    <p>Promovemos o convívio social, atividades recreativas, dias de jogos, aulas de culinárias, suporte emocional e toda a segurança para seus familiares.
                        Contribuimos para o bem estar físico, emocional e social dos idosos, promovendo uma melhor qualidade de vida na terceira idade.</p>
                </CardHero>
            </HeroDiv>
    </section>
    )
}

export default Hero;
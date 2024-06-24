import './style.css'
import nr20 from'./imgs/nr-20.png'
import nr23 from'./imgs/nr-23.jpg'
import nr35 from './imgs/nr-35.jpg'
import nr33 from './imgs/nr-33.jpg'
import nr12 from './imgs/nr-12.jpg'
import nr6 from './imgs/nr-6.jpg'

function Servicos (){
    return(
        <div class="container">
            <h1>Serviços Disponíveis</h1>

            <div class="servicos">
                <div className='alinhamento'>
                    <h2>Inflamáveis e combustíveis </h2>
                    <img className='nr' src={nr20} alt='nr20'/>
                </div>
                <h3>Sobre o Curso:</h3>
                <p>A NR 20 estabelece as diretrizes fundamentais para garantir a segurança na manipulação, armazenamento e transporte de inflamáveis e combustíveis. Nosso curso oferece uma abordagem abrangente, capacitando os participantes a aplicar medidas preventivas e promover ambientes de trabalho seguros em conformidade com as normas regulamentadoras.</p>
            </div>

            <div class="servicos">
                <div className='alinhamento'>
                    <h2>Proteção contra incêndio</h2>
                    <img className='nr' src={nr23} alt='nr23'/>
                </div>    
                <h3>Sobre o Curso:</h3>
                <p>A NR 23 estabelece as diretrizes essenciais para a prevenção e o combate a incêndios em locais de trabalho, garantindo a segurança dos colaboradores e a preservação de patrimônio. Nosso curso oferece uma abordagem abrangente, capacitando os participantes a identificar, prevenir e agir diante de situações envolvendo incêndios.</p>
            </div>

            <div class="servicos">
                <div className='alinhamento'>
                    <h2>Trabalho em altura</h2>
                    <img className='nr' src={nr35} alt='nr35'/>
                </div>
                <h3>Sobre o Curso:</h3>
                <p>A NR 35 estabelece os parâmetros mínimos de segurança para o trabalho em altura, garantindo a integridade dos trabalhadores envolvidos em atividades elevadas. Nosso curso oferece uma abordagem abrangente, capacitando os participantes a compreenderem os princípios fundamentais e a aplicarem práticas seguras em trabalhos em altura.</p>
            </div>

            <div class="servicos">
                <div className='alinhamento'>
                    <h2>Espaço confinado</h2>
                    <img className='nr' src={nr33} alt='nr33'/>
                </div>
                <h3>Sobre o Curso:</h3>
                <p>A NR 33 estabelece os requisitos mínimos para a identificação, reconhecimento, avaliação e controle dos riscos presentes nos espaços confinados. Nosso curso fornece uma abordagem abrangente, capacitando os participantes a entenderem os desafios específicos associados a esses ambientes e a aplicarem procedimentos seguros.</p>
            </div>

            <div class="servicos">
                <div className='alinhamento'>
                    <h2>Máquinas e equipamentos</h2>
                    <img className='nr' src={nr12} alt='nr12'/>
                </div>
                <h3>Sobre o Curso:</h3>
                <p>A NR 12 tem como objetivo principal estabelecer requisitos mínimos para a segurança no trabalho em máquinas e equipamentos, visando à prevenção de acidentes e a promoção da eficiência operacional. Este curso aborda os princípios fundamentais que permeiam a NR 12, proporcionando uma compreensão abrangente sobre a segurança no manuseio de máquinas.</p>
            </div>

            <div class="servicos">
                <div className='alinhamento'>
                    <h2>Equipamento de proteção individual</h2>
                    <img className='nr' src={nr6} alt='nr6'/>
                </div>
                <h3>Sobre o Curso:</h3>
                <p>A NR 6 tem como objetivo estabelecer critérios e diretrizes para a seleção, uso, guarda, descarte e responsabilidades relacionadas aos Equipamentos de Proteção Individual. Nosso curso oferece uma abordagem abrangente sobre os aspectos práticos e teóricos relacionados aos EPIs, permitindo que os participantes atendam às exigências legais e promovam a segurança no trabalho.</p>
            </div>
        </div>
    )
};
export default Servicos;
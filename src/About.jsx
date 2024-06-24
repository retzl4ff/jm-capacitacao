const About = () => {
  return (
    <div className="about">
        <div className="row">
            <h1 className="title">
                Sobre Nós
            </h1>
        </div>
        <div className="row">
            <div className="asideTxt">
                <p>
                    Desde nossa fundação em 2012, temos nos dedicado a oferecer treinamento
                    de alta qualidade nas áreas de segurança no trabalho e normas
                    regulamentares.
                    Nossa missão é capacitar empresas e indivíduos, fornecendo o
                    conhecimento necessário para operar com segurança e conformidade,
                    especialmente nas normas NR-11, NR-12, NR-35, dentre outras.
                </p>
                <p>
                    Nossa empresa é liderada por <strong>João Alexandre Moreira de Matos</strong>, um
                    profissional com formação em Administração e Segurança no Trabalho e uma
                    sólida experiência como ex-bombeiro militar. Com uma equipe pequena, porém
                    dedicada, na JM Capacitação, cada treinamento é conduzido com atenção aos
                    detalhes e comprometimento com a excelência.
                </p>
            </div>
            <img src=".\NR.webp" alt="Normas Regulamentadoras" className="asideImg"/>
        </div>
        <div className="row">
            <p>Atendemos tanto empresas
            quanto pessoas físicas que buscam qualificação e aprimoramento
            profissional, sempre visando proporcionar um ambiente de trabalho mais
            seguro e eficiente. Estamos aqui para ajudá-lo a alcançar a segurança e a
            competência que você e sua equipe merecem. Conte conosco para sua
            capacitação em segurança no trabalho!</p>
        </div>
    </div>
  );
};
export default About;

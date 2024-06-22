const Home = () => {
    return (
        <div className="home-row">
            <div className="home-body">
                <div className="home-bv poppins-black">
                    <h2>Seja bem vindo à</h2>
                    <h1><u>JM CAPACITAÇÃO</u></h1>
                </div>
                <div className="home-card poppins-regular-italic">
                    <p>
                        Somos uma escola de segurança no trabalho, e temos <br/> 
                        como foco de nossos serviços: <strong>Capacitar para Salvar!</strong> <br/>
                        Atuamos hoje oferecendo cursos de <u>Normas Regulamentadoras</u> (NR's) <br/>
                        e <u>Bombeiro Profissional Civil</u> (BPC), de maneira presencial e online, <br/>
                        disponibilizando certificações logo após a conclusão dos cursos.

                    </p>
                </div>
            </div>
            <img src="/home-bomb.png" alt="imagem-bombeiro" className="image-bombeiro"/>
        </div>
    );
}

export default Home;
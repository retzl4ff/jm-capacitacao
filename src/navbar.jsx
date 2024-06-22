const home = () => {};
const sobre = () => {};
const servicos = () => {};
const localizacao = () => {};
const contato = () => {};

const NavBar = () => {
    return (
        <nav className="navbar poppins-regular">
            <div className="navbar-logo">
                <img src="/logo-empresa.png" alt="Logo da Empresa" />
            </div>
            <div className="navbar-links">
                <a onClick={home}>Home</a>
                <a onClick={sobre}>Sobre Nós</a>
                <a onClick={servicos}>Serviços Disponíveis</a>
                <a onClick={localizacao}>Localização</a>
                <a onClick={contato}>Contato</a>
            </div>
        </nav>
    );
}

export default NavBar
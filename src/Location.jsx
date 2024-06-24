     function Location() {
        return (
          <div className="location">
            <h2>Localização da Empresa</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.807991420705!2d-48.890777899999996!3d-26.2678944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dea56fef92f65f%3A0x6318629306930948!2sR.%20Jacob%2C%20265%20-%20Costa%20e%20Silva%2C%20Joinville%20-%20SC%2C%2089220-500!5e0!3m2!1spt-BR!2sbr!4v1719184827068!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p>
              Nossa sede está localizada na Rua Jacob 265, no bairro Costa e Silva. Além disso, realizamos atendimentos em nossas empresas clientes e disponibilizamos instrutores capacitados.
            </p>
          </div>
        );
      }
      
      export default Location;
      
import "./App.css";
import Footer from "./footer";
import Home from "./home";
import NavBar from "./navbar";

import About from "./About";
import Location from "./Location";
import Contact from "./Contact";
import { FloatingWhatsApp } from "react-floating-whatsapp";

import Servicos from "./Servicos";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />

      <Location />
      <Servicos />
      <Contact />
      <FloatingWhatsApp
        phoneNumber="4734266611"
        accountName="JM Capacitação"
        avatar="/logo-empresa.png"
        statusMessage=""
        chatMessage="Olá, como posso ajudar?"
        placeholder="Mensagem"
        allowClickAway="true"
        messageDelay="1"
        notificationSound="true"
      />

      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logosimpson.png";
import { Button, Container } from "react-bootstrap";
import Frase from "./components/Frase";
import { useEffect, useState } from "react";

function App() {
  const [personaje, setPersonaje] = useState({});

  // useEffect solo en montaje
  useEffect(() => {
    //consultar a una api
    consultarApi();
  }, []);

  const consultarApi = () => {
    try {
      //codigo que quiero ejecutar
      const respuesta = fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
      console.log(respuesta)

    } catch (error) {
      console.log(error);
      // dejar un mensaje intuitivo para el usuario final
    }
  };

  return (
    <>
      <Container className="text-center my-5">
        <img src={logo} alt="Logo de los simpson" className="w-50" />
        <Frase></Frase>
        <Button variant="warning">Obtener frase</Button>
      </Container>
    </>
  );
}

export default App;

import React from "react";
import "./App.scss";

import Container from "./components/Container";

function App() {
  
  return (
    <div className="App">
      <h1>Just Do It</h1>
    <div  className="ToDos">
      <Container titulo="Hazlo ahora" />
      <Container  titulo="Planifica"/>
      <Container titulo="Delega"/>
      <Container titulo="Cuando termines" subtitulo="holi"/>      

    </div>
    </div>
  );
}



export default App;


import React, { useState } from "react";
import './App.css';
import { NotasContainer } from './NotasContainer';
import { NotasForm } from './NotasForm';
import { getId } from "./utils/getId";

function App() {

  const [notas, setNotas] = useState([]);

  const crearNota = (titulo) => {
    setNotas([...notas, {id: getId() , titulo }]);
  }

  return (
    <div className="App">
      <h1>Coder Notas</h1>
      <NotasForm onSubmit={crearNota} />
      <NotasContainer notas={notas} />
    </div>
  );
}

export default App;

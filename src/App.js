import React, { useState } from "react";
import './App.css';
import { NotasContainer } from './NotasContainer';
import { NotasForm } from './NotasForm';

function App() {

  const [notas, setNotas] = useState([]);
  const [idMax, setIdMax] = useState(0);

  const crearNota = (titulo) => {
    setNotas([...notas, {id: idMax , titulo }]);
    setIdMax(idMax + 1);
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

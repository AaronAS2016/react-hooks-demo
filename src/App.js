import React from "react";
import './App.css';
import { useFetchCharachters } from "./hooks/useFetchCharacthers";
import { useNotes } from "./hooks/useNotes";
import { NotasContainer } from './NotasContainer';
import { NotasForm } from './NotasForm';

const URL_API = "https://rickandmortyapi.com/api/character";

function App() {

  const {notas, crearNota} = useNotes();
  const { charachters } = useFetchCharachters(URL_API);

  return (
    <div className="App">
      <h1>Coder Notas</h1>
      <NotasForm onSubmit={crearNota} />
      <NotasContainer notas={notas} />
      {
        charachters.map((charachter) => <p key={charachter.id}> { charachter.name}   </p>)
      }
    </div>
  );
}

export default App;

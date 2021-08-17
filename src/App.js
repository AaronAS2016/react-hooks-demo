import React, { useReducer } from "react";
import './App.css';
import { NotasContainer } from './NotasContainer';
import { NotasForm } from './NotasForm';
import { notasReducer, NOTA_ACTIONS } from "./reducers/notasReducer";

function App() {

  const [notas, dispatch ] = useReducer(notasReducer, []);
  

  const crearNota = (titulo) => {
    dispatch(
        { 
          type: NOTA_ACTIONS.CREAR_NOTA,
          payload: { titulo }
        }
     )
  };

  return (
    <div className="App">
      <h1>Coder Notas</h1>
      <NotasForm onSubmit={crearNota} />
      <NotasContainer notas={notas} />
    </div>
  );
}

export default App;

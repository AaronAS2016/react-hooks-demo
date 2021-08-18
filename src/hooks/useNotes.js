import { useReducer } from "react";
import { notasReducer, NOTAS_ACTIONS } from "../reducers/notasReducer";

export const useNotes = (initialState = []) => {
    const [notas, dispatch] = useReducer(notasReducer, []);

    const crearNota = (titulo) => {
      dispatch( {type: NOTAS_ACTIONS.CREAR_NOTA, payload:  titulo })
    }
    
    return { notas, crearNota }
} 
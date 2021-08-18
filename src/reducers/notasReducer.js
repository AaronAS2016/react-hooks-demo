import { getId } from "../utils/getId";

export const NOTAS_ACTIONS = {
    CREAR_NOTA: "CREAR_NOTA"
}

export const notasReducer = (state, action) => {
    const { type, payload } = action;
    if(type === NOTAS_ACTIONS.CREAR_NOTA){
        return [...state, {id: getId(), titulo: payload  }];
    }

    return state;
}

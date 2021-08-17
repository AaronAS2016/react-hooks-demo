import uniqid from "uniqid"

export const NOTA_ACTIONS = {
    CREAR_NOTA: "CREAR_NOTA",
    BORRAR_NOTA: "BORRAR_NOTA"
}

export const notasReducer = (state, action) => {
    const { type } = action;

    if (type === NOTA_ACTIONS.CREAR_NOTA) {
        const { titulo } = action.payload

        return [
            ...state,
            {
                id: getNewId(),
                titulo
            }
        ]
    }
}


const getNewId = () => uniqid()
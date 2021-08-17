import React, { useState } from "react"

export const NotasForm = ({ onSubmit }) => {


    const [titulo, setTitulo] = useState("");

    return (
        <div>
            <input value={titulo} onChange={({ target: { value } }) => setTitulo(value)} placeholder="Ingrese titulo de nota" />
            <button onClick={() => onSubmit(titulo)}>Crear nota</button>
        </div>
    )
}
import React from "react"
import { Nota } from "./Nota"


export const NotasContainer = ({ notas }) => {
    return (
        <div>
            {
                notas.map((nota) => <Nota key={`nota-${nota.id}`} {...nota} />)
            }
        </div>
    )
}
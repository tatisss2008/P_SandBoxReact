

//Se debe retornar la estructura del componente

import { useState } from "react";

//Se usa JSX
function BasicComponent(props){

    const [click,cambiarValor]=useState(0)

    const nuevoValor= ()=>{
        cambiarValor(click+1)
    }

    let mensaje="hola";
    let id=props.inputID;

    return (
        <div>
            <h1>Mi componente</h1>
            <p>WEste es un componente REact</p>
            <p>{mensaje}</p>
            <h1>{props.texto}</h1>

            <input type="text" id={id}/>
            <button onClick={nuevoValor}>Aceptar - click: {click}</button>
        </div>
    )
}

export default BasicComponent
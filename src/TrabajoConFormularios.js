import React, {Component} from "react";
import Imagen from "react-image"

class TrabajoConFormularios extends Component{
    render() {
        return(
            <div>
                <form name={"formulario1"} id={"formulario1id"} action={""}>
                    <fieldset>
                        <legend>Formulario con React</legend>
                        <label for={"campotexto1id"}>Nombre: </label>
                        <input type={"text"} name={"campotexto1"} id={"campotexto1id"} placeholder={"Introduce nombre"}/><br/>
                        <label htmlFor={"campobusqueda"}>Buscar: </label>
                        <input type={"text"} name={"campobusqueda"} id={"campobusqueda"}
                               placeholder={"icono busqueda"} className={"claseinput1"}/>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default TrabajoConFormularios
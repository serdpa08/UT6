import React, {Component} from "react";
import Imagen from "react-image"

class SelectoresAtributo extends Component{
    render() {
        return(
            <div>
                <a href= "https://www.google.es" target="_blank">Enlace a google que cumple un selector de atributos</a><br/>
                <a href= "https://www.google.es" target="_self">Enlace a google que cumple un selector de atributos con valor self</a>
                <br/><br/>
                <Imagen alt="K2" src={require("./img/k2.jpg")} />
                <br/> <br/>

                <p className={"claseparrafo-1"}>Este párrafo va a cumplir un selector de atributos para elementos con el atributo class y cuyo valor comience por clase parrafo</p>

                <br/>
                <p className={"claseselector1"}>Va a cumplir un selector de atributos para elementos con el atributo class y cuyo valor comience con una palabra que puede ir seguida de cualquier conjunto de caracteres</p>
                
            </div>
        )
    }
}

export default SelectoresAtributo
import React, {Component} from "react";
import SelectoresAtributo from "./SelectoresAtributo.js"
import TrabajoConFormularios from "./TrabajoConFormularios"

class Aplicacion extends Component{
    render() {
        return (
            <div>
                <SelectoresAtributo />
                <TrabajoConFormularios />
            </div>

        );
    }
}

export default Aplicacion
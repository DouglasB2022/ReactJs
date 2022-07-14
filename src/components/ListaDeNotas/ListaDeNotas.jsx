import React, { Component } from "react";
import CardNota from "../CardNota";
import "./Lista.css";

class ListaDeNotas extends Component{
    
    render(){
        return( 

    <ul className="lista__notas">
        {this.props.notas.map((nota, index) =>{
            return(
                <li className="lista__notas-item" key={index}> 
                    
                    <CardNota titulo={nota.titulo} texto={nota.texto}/>
                </li>
            );
        })}
        
    </ul>
        );
    }
}
export default  ListaDeNotas;
import React, { Component } from 'react';
import "./Card.css";

class CardNota extends Component {
    
    render() { 

        return (
            <section className="card__nota">
          <header className="card__nota-cabecalho">
            <h3 className="card__nota-titulo">{this.props.titulo}</h3>
          </header>
          <p className="card__nota-texto">{this.props.texto}</p>
        </section>
        );
    }
}
 
export default CardNota;
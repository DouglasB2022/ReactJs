import React, {Component} from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import Formulario from "./components/Formulario";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {

  constructor(){
    super();
    this.state = {
      notas:[]
    }
  }

 criarNota(titulo, texto){
const novaNota = {titulo, texto};
const novoArrayNotas = [...this.state.notas, novaNota];
const novoEstado ={
  notas:novoArrayNotas
}
this.setState(novoEstado)
}
render (){
    return (
 
      <div className="conteudo">
      <Formulario 
      criarNota={this.criarNota.bind(this)}
      />
      <ListaDeNotas notas={this.state.notas}/>
    </div>
    );
    }
}

export default App;

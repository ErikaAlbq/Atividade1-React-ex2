import React,{ Component } from "react";
import estilos from "./estilos";


export default class Pessoa extends Component{

render(){
  return (

  <button
    style={estilos.botao_pessoas}
    onClick={this.props.alterar.bind(this, this.props.pessoa)}>
   
   {this.props.pessoa}
   </button>
       );
    }
}
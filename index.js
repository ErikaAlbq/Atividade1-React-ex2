import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import estilos from "./componentes/estilos";
import Pessoa from "./componentes/Pessoa";

class App extends Component {
  constructor() {
    super();
    this.state = {
      q_clicou: 'Ninguem',
      
    };
  }

 alterar = (origem)=>{
   this.setState({
     q_clicou: origem
   });
 
 }

 
  render() {
    
    return (
   <div style={estilos.container}>
         <p  style={estilos.titulo}>Quem clicou? {this.state.q_clicou}</p>
         
         <div style={estilos.linha }>
         
            <Pessoa pessoa= "ELA" alterar={this.alterar}  />
            <Pessoa pessoa= "ELE" alterar={this.alterar}  />
        
          </div>
        </div>
      
    );
  }
}

render(<App />, document.getElementById('root'));

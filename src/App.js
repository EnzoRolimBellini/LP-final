
import { Component } from 'react';
import './App.css';
import Cabeçalho from "./Componentes/Cabeçalho";
import Video from "./Componentes/Video";
import Formulario from "./Componentes/Formulario";
import Contato from "./Componentes/Contato";
class App extends Component  {
  render() { 
    return (
        <body>
       <Cabeçalho/>
       <Video/> 
       <Formulario/>
       <Contato/>
        </body>
        )
    }
}

export default App;

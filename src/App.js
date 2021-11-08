
import { Component } from 'react';
import Cabeçalho from "./Componentes/Cabeçalho";
import Video from "./Componentes/Video";
import Formulario from "./Componentes/Formulario";
import Contato from "./Componentes/Contato";
import  "./Assets/App.css";
import "./Assets/Index.css";



class App extends Component  {
  render() { 
    return (
        <body className = "App-centraliza">
         <Cabeçalho/>
        <Video/>
       <Formulario/>
       <Contato/>
        </body>
        )
    }
}

export default App;

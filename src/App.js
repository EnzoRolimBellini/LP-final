
import { Component } from 'react';
import Cabeçalho from "./Componentes/Cabeçalho";
import Video from "./Componentes/Video";
import Form from "./Componentes/Form";
import Contato from "./Componentes/Contato";
import  "./Assets/App.css";
import "./Assets/Index.css";



class App extends Component  {
  render() { 
    return (
        <body className = "App-centraliza">
         <Cabeçalho/>
         <Video/>
         <Form/>
         <Contato/>
        </body>
        )
    }
}

export default App;

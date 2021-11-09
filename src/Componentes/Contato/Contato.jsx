import React, {Component} from "react";
import "./Contato.css";
import Enzo from "../../Assets/img/enzo-2.jpg";
import Dudu from "../../Assets/img/dudu.jpg";
import Joao from "../../Assets/img/joao-3.jpg";
import Teixeira from "../../Assets/img/duduteixeira.jpg";
import Lista_1 from "./Lista";
import Lista_2 from "./Lista";
import Lista_3 from "./Lista";
import Lista_4 from "./Lista";

 

class Contato extends Component {
   
  
   
    render() {
        return (
        <section className = "contato-section">    
            <h1 className = "contato-titulo">Contatos</h1>

            <ul>
            <li className = "contato-li">
            <img src = {Enzo} alt = "enzo" className = "perfil"/>
            <p className = "nome" >Enzo R. Bellini</p>
                <Lista_1/>
            </li>

            <li>
            <img src = {Dudu} alt = "dudu" className = "perfil"/>
            <p className = "nome">Eduardo G. Fensterseifer</p>
                <Lista_2/>
            </li>

            <li>
            <img src = {Joao} alt = "joao" className = "perfil"/> 
            <p className = "nome" >João Pedro Rodrigues</p>
                <Lista_3/>
            </li>

            <li>           
            <img src = {Teixeira} alt = "eduardo teixeira" className = "perfil"/>    
            <p className = "nome">Eduardo C. Teixeira</p>
                <Lista_4/>
            </li>
        </ul>
      </section>  
        )
    }
}

export default Contato;
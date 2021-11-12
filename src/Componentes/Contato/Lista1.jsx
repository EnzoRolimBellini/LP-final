import React, {Component} from "react";
import Github from "../../Assets/img/github.jpg" 
import Linkedin from "../../Assets/img/linkedin.jpg";
import Smartphone from "../../Assets/img/smartphone.svg";
import "./Contato.css";

 export default class Lista_1 extends Component { 
    
    
    render(){ 
        return (
          <details className="Contato-details">
            <summary>Saiba mais</summary>
            <ul className="Contato-lista">
              <li>
                <img src={Smartphone} alt="telefone " className="celular" />
                <p>(51) 99141-5252</p>
              </li>

              <li>
                <a href="https://github.com/EnzoRolimBellini" target="_blank">
                  <img src={Github} alt="github" className="Contato-icone" />
                </a>
              </li>

              <li>
                <a href="" target="_blank">
                  <img
                    src={Linkedin}
                    alt="linkedin"
                    className="Contato-icone"
                  />
                </a>
              </li>
            </ul>
          </details>
        );    
    }
}    
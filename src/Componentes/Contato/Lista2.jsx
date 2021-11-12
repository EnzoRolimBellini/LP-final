import React, {Component} from "react";
import Github from "../../Assets/img/github.jpg" 
import Linkedin from "../../Assets/img/linkedin.jpg";
import Smartphone from "../../Assets/img/smartphone.svg";
import Instagram from "../../Assets/img/instagram.jpg";
import "./Contato.css";

export default class Lista_2 extends Component {
    render(){
        return (
          <details className="Contato-details">
            <summary>Saiba mais</summary>
            <ul className="Contato-lista">
              <li>
                <img src={Smartphone} alt="telefone " className="celular" />
                <p>(51) 98114-1589</p>
              </li>

              <li>
                <a href="https://github.com/EduardoFen12" target="_blank">
                  <img src={Github} alt="github" className="Contato-icone" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/eduardo-fensterseifer"
                  target="_blank"
                >
                  <img
                    src={Linkedin}
                    alt="linkedin"
                    className="Contato-icone"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/eduardo_fensterseifer/"
                  target="_blank"
                >
                  <img
                    src={Instagram}
                    alt="instagram"
                    className="Contato-icone"
                  />
                </a>
              </li>
            </ul>
          </details>
        );
    }
}
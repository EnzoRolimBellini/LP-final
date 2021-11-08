import React, {Component} from "react";
import "./Contato.css";
import Enzo from "../../Assets/img/enzo-2.jpg";
import Dudu from "../../Assets/img/dudu.jpg";
import Joao from "../../Assets/img/joao-3.jpg";
import Teixeira from "../../Assets/img/duduteixeira.jpg";
import Github from "../../Assets/img/github.jpg" ;
import Instagram from "../../Assets/img/instagram.jpg";
import Linkedin from "../../Assets/img/linkedin.jpg";
import Smartphone from "../../Assets/img/smartphone.svg";



class Contato extends Component {
    render() {
        return (
        <section className = "contato-section">    
            <ul>
            <li>
            <img src = {Enzo} alt = "enzo" className = "perfil"/>
            <p className = "nome">Enzo R. Bellini</p>
       <details className = "Contato-details">
            <ul  className = "Contato-lista">
                <li>
                    <img src = {Smartphone} alt = "telefone " className = "celular"/><p>(51) 99141-5252</p>
                </li>

                <li>
                    <a href="https://github.com/EnzoRolimBellini" target="_blank">
                        <img src = {Github} alt = "github" className = "Contato-icone"/>
                    </a>
                </li>
                <li>
                    <a href="" target="_blank">
                        <img src = {Linkedin} alt = "linkedin" className = "Contato-icone"/>
                    </a>
                </li>

            </ul>
           </details>
            </li>

            <li>
            <img src = {Dudu} alt = "dudu" className = "perfil"/>
            <p className = "nome">Eduardo G. Fensterseifer</p>
            <details className = "Contato-details">   
            <ul className = "Contato-lista">
                <li>
                    <img src = {Smartphone} alt = "telefone " className = "celular"/><p>(51) 98114-1589</p>
                </li>

                <li>
                    <a href="https://github.com/EduardoFen12" target="_blank">
                        <img src = {Github} alt = "github" className = "Contato-icone"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/eduardo-fensterseifer" target="_blank">
                        <img src = {Linkedin} alt = "linkedin" className = "Contato-icone"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/eduardo_fensterseifer/" target="_blank">
                        <img src= {Instagram} alt = "instagram" className = "Contato-icone"/>
                    </a>
                </li>
            </ul>
            </details>
            </li>

            <li>
            <img src = {Joao} alt = "joao" className = "perfil"/> 
            <p className = "nome" >João Pedro Rodrigues</p>
            <details className = "Contato-details">
            <div className = "Contato-dados">    
                <ul  className = "Contato-lista">
                    <li>
                        <img src = {Smartphone} alt = "telefone " className = "celular"/> <p>(54) 98436-9987</p>
                    </li>

                     <li>
                        <a href="https://github.com/Joao-Pedro2804" target="_blank">
                            <img src = {Github} alt = "github"  className = "Contato-icone"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/joao-pedro-rodri/" target="_blank">
                            <img src = {Linkedin} alt = "linkedin"  className = "Contato-icone"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/joaoprodri_/" target="_blank">
                            <img src= {Instagram} alt = "instagram"  className = "Contato-icone"/>
                        </a>
                    </li>
                </ul>
            </div>
            </details> 
            </li>

            <li>           
            <img src = {Teixeira} alt = "eduardo teixeira" className = "perfil"/>    
            <p className = "nome">Eduardo C. Teixeira</p>
            <details className = "Contato-details">
            <ul  className = "Contato-lista">
                <li>
                    <img src = {Smartphone} alt = "telefone " className = "celular"/><p> (51) 98619-6898</p>
                </li>

                <li>
                    <a href="https://github.com/Texcon38" target="_blank"> 
                        <img src = {Github} alt = "github" className = "Contato-icone"/>    
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/eduardo-constante-teixeira-716222210" target="_blank">
                        <img src = {Linkedin} alt = "linkedin"  className = "Contato-icone"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/eduardoconstantee_/" target="_blank">
                        <img src= {Instagram} alt = "instagram"  className = "Contato-icone"/>      
                    </a>
                </li>
            </ul>
            </details>
            </li>
        </ul>
      </section>  
        )
    }
}

export default Contato;
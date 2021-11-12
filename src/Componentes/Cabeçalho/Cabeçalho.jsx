import React, {Component} from "react";
import "./Cabeçalho.css"
import imagem from "../../Assets/img/cat.jpg";
import Project from "../../Assets/img/Project.svg";
import Contact from "../../Assets/img/Contact.svg";
import Phone from "../../Assets/img/Phone.svg";
 class Cabeçalho extends Component {

 

render() {
    return (
    <header className= "linha-do-header">
    
        <section className = "centralizador">
            
        <img src= {imagem} alt = "logo" className= "logo"></img> 
            
            <div className = "box">
                <div className = "animation-1" >
                <p  className = "botao"><img  className="cabeçalho-svg-1"src = {Project} alt = ""/>PROJETO</p>
                </div>
            </div>

            <div className = "box">
                <div className = "animation-2" >
                <p  className = "botao"><img className="cabeçalho-svg-2" src = {Contact} alt = ""/>INTERAÇÃO</p>
                </div>
            </div>

            <div className = "box">
                <div className = "animation-3" >
                <p className = "botao" ><img className="cabeçalho-svg-3" src = {Phone} alt= ""/>CONTATO</p>
                </div>
            </div>    
        
        </section>
    
    </header>
    
    ) 
  }
}

export default Cabeçalho;
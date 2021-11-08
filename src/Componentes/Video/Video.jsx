import React, {Component} from "react";
import "./Video.css";
import Fundo from "../../Assets/img/fundo.mp4";

class Video extends Component {
render() {
    return (
    <section>
        <div className = "background">
            <video autoPlay loop muted
            style = {{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "50%",
                height: "80%",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex: "-1",

            }}>
                <source src = {Fundo} type = "video/mp4" />
            </video>
        </div>
           <div className = "video-texto"> 
               <h2 className="titulos-menu">O PROJETO:</h2>
               <span>Foi como proposta principal um template simples de interface para usuários. 
                   Com  perguntas e assuntos pertinentes em qualquer relação  básica com o usuário. 
                   Além de ser um exemplo acessível de código, para programadores iniciantes.</span>
           </div>
        <figure>      
            <div className="containers-iframe" >
                
                <iframe width="500" height="300" className = "video"
                src="https://www.youtube.com/embed/wDh_3PVc7sw" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen/>
                            
            </div>
            
        </figure>
    </section>
        )
    }
}

export default Video;
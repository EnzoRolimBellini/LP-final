import React, { Component } from "react";
import "./Form.css"

class Form extends Component {
    render() {
        return(
            <div className="back-ground">
                <section className="container">
                    <h2>FeedBack</h2>
                    <form>
                        <label for="nomesobrenome" className="input-padrao">Nome e Sobrenome</label>
                        <input type="text" className="input-padrao" id="nomesobrenome" required/>

                        <label for="email" className="input-padrao">Email</label>
                        <input type="email" className="input-padrao" id="email" required placeholder="seuemail@dominio.com"/>

                        <label for="telefone" className="input-padrao">Telefone</label>
                        <input type="tel" className="input-padrao" id="telefone" required required placeholder="(XX)XXXXX-XXXX"/>

                        <label for="mensagem" className="input-padrao">Mensagem</label>
                        <textarea cols="50" rows="10" className="input-padrao" id="mensagem" className="input-padrao" required></textarea>

                        <input type="submit" value="Enviar Formulário" className="botao-enviar"/>
                    </form>
                </section>
            </div>
        )
    }
}

export default Form;
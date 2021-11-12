import React, { useState } from "react";
import "./Form.css";

function Form() {

  const [user, setUser] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });

  //Receber os dados do formulário
  const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value });

  const addUser = async e => {
    e.preventDefault();

    if(!validate()) return;

    const saveDataForm = true;

    if (saveDataForm) {
      setStatus({
        type: 'success',
        mensagem: "Agradecemos o seu Feedback!"
      });
      setUser({
        name: '',
        email: '',
        feedback: ''
      });
    } else {
      setStatus({
        type: 'error',
        mensagem: "Erro: Feedback não enviado!"
      });
    }
  }

  function validate(){
    if(!user.name) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo nome!'});
    if(!user.email) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo e-mail!'});
    if(!user.feedback) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo de feedback!'});

    return true;
  }

  return (
    <div className="back-ground">
        <section className="container">
            <h1>Envie o seu Feedback</h1>

            {status.type === 'success' ? <p className="success">{status.mensagem}</p> : ""}
            {status.type === 'error' ? <p className="error">{status.mensagem}</p> : ""}

            <form  onSubmit={addUser}>
                <label className="input-padrao">Nome:</label>
                <input type="text" name="name" className="input-padrao" placeholder="Nome completo" onChange={valueInput} value={user.name} /><br /><br />

                <label className="input-padrao">E-mail:</label>
                <input type="email" name="email" className="input-padrao" placeholder="Melhor e-mail" onChange={valueInput}  value={user.email} /><br /><br />

                <label className="input-padrao">Feedback:</label>
                <textarea type="text" name="feedback" className="input-padrao" placeholder="Feedback" autoComplete="on" onChange={valueInput} value={user.feedback} /><br /><br />

                <button className="botao-enviar" type="submit">Enviar</button>
            </form>
        </section>
    </div>
  );
}

export default Form;
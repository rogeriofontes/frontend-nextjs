import { useState } from "react";
import { registerUser } from "../../../lib/auth";
import Router from "next/router";
import fontwhitecenter from '../../../styles/font-white-center';
import fontwhite from '../../../styles/font-white';

export function RegisterForm() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const dataResponse = await registerUser({
        nome: nome,
        senha: senha,
        email: email,
      });

      if (!dataResponse.ok) {
        setMessage('Erro ao registar dados!');
      } else {
        Router.push("/login");
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <p style={fontwhitecenter}>{msg}</p>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className="h1" style={fontwhite}>Register</legend>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label" style={fontwhite}>
              Email:&nbsp;&nbsp;
            </label>
            <input
              type="email"
              id="emailInput"
              className="form-control"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div className="mb-3">
            <label htmlFor="nomeInput" className="form-label" style={fontwhite}>
            Nome:&nbsp;&nbsp;
            </label>
            <input
              type="text"
              id="nomeInput"
              className="form-control"
              placeholder="Nome"
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <br />
          <div className="mb-3">
            <label htmlFor="senhaInput" className="form-label" style={fontwhite}>
              Senha:&nbsp;&nbsp;
            </label>
            <input
              type="password"
              id="senhaInput"
              className="form-control"
              placeholder="Senha"
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

import { useState } from "react";
import { Link } from 'react-router-dom';


export const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Cadastro</span>

            <div className="wrap-input">
            <input
                className={cpf !== "" ? "has-val input" : "input"}
                type="text"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
              <span className="focus-input" data-placeholder="CPF"></span>
            </div>

            <div className="wrap-input">
              <input
                className={nome !== "" ? "has-val input" : "input"}
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Nome Completo"></span>
            </div>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={dataNascimento !== "" ? "has-val input" : "input"}
                type="text"
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Data de Nascimento"></span>
            </div>

            <div className="wrap-input">
              <input
                className={telefone !== "" ? "has-val input" : "input"}
                type="text"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Telefone"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="wrap-input">
              <input
                className={confirmPassword !== "" ? "has-val input" : "input"}
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Confirme sua Senha"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Cadastrar</button>
            </div>

            <div className="text-center">
              <span className="txt1">Já possui conta? </span>
              <a className="txt2" href="#">
              <Link to="/entrar">Entrar</Link>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
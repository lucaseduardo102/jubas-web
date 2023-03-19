import { useState } from "react";
import { Link } from 'react-router-dom';
import "./style-cad.css";

export const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Cadastro</span>

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
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
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
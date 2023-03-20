import { useState } from "react";
import { Link } from 'react-router-dom';
import "./style.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  async function validateLogin() {

    const response = await fetch(`http://localhost:3003/client/check-in`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
    const json = await response.json();
  /*  if (response.status == 200) {
      console.log('Cadastro concluido');
    } else {
      console.log(json.message);
    } */ 
  }

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form onSubmit={validateLogin} className="login-form">
            <span className="login-form-title">Login</span>

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
              <button type="submit" className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta? </span>
              <a className="txt2" href="#">
                <Link to="/pagina-inicial">Criar conta</Link>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
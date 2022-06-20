import { useState, useEffect } from "react";
import Router from "next/router";
import { loginUser } from "../../../lib/auth";
import { removeToken } from "../../../lib/token";
import fontwhite from '../../../styles/font-white';
import AsyncLocalStorage from '@createnextapp/async-local-storage';

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Remove the User's token which saved before.
    removeToken();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setIsLoading(true);
      // API call:
      const data = await loginUser(email, senha);
      if (data.data !== null) {
        //var token = JSON.stringify(data.token);
       // console.log("Token is :", token);
        //console.log("rememberMe:", rememberMe)
       // await AsyncLocalStorage.setItem('token', token)
       // if (typeof window !== 'undefined') {
       //   console.log("Window :", window);
        //  window.localStorage.setItem('token', token)
       // }
        setTimeout(() => {
          Router.push("/dashboard");
        }, 1000);
      } else {
        var message = JSON.stringify(data.error.message);
        console.log("Error is :", message);
        setErrorMessage(message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend className="h1">Login</legend>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label" style={fontwhite}>
            Email:&nbsp;&nbsp;
          </label>
          <input
            type="text"
            id="emailInput"
            className="form-control"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
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
            placeholder="Semha"
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <br />
        <div className="mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="RememberMeInput"
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="RememberMeInput" style={fontwhite}>
              Remember Me
            </label>
          </div>
        </div>
        <br />
        {errorMessage && (
          <div className="alert alert-danger" role="alert" style={fontwhite}>
            {errorMessage}
          </div>
        )}
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          Login
        </button>
      </fieldset>
    </form>
  );
}
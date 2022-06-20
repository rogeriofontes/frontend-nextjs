import React, { useState } from "react";
import Router from "next/router";
import { whoAmI } from "../lib/auth";
import { removeToken, getToken, setToken } from "../lib/token";
import Link from "next/link";

const styles = {
  marginTop: 30,
  textAlign: "left",
};

export default function Dashboard() {
  const [user, setUser] = useState({});

  // Watchers
  React.useEffect(() => {

    if (typeof window !== "undefined") {
      // const token = window.localStorage.getItem("token");
      //console.log("token dashboard: ", token);
      const token = getToken();
      if (!token) {
        redirectToLogin();
      } else {
        (async () => {
          try {
            console.log("token dashboard1: ", token);
            /*const res = await fetch("http://localhost:8080/api/v1/usuarios/1", {
              method: "GET",
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
              },
            });*/

            //const data = await res.json();
            //console.log("Data Usuario:", data);
            const data = await whoAmI();
            console.log('Data: ' + data)
            //console.log('Data: ' + data.token);
            var username = JSON.stringify(data.nome);
            console.log('user: ' + username);
            if (data.error === "Unauthorized") {
              // User is unauthorized and there is no way to support the User, it should be redirected to the Login page and try to logIn again.
              redirectToLogin();
            } else {
              setUser(data);
            }
          } catch (error) {
            console.log('Erro: ' + error);
            // If we receive any error, we should be redirected to the Login page
            //redirectToLogin();
          }
        })();
      }
    }
  }, []);

  function redirectToLogin() {
    Router.push("/login");
  }

  function handleLogout(e) {
    e.preventDefault();

    removeToken();
    redirectToLogin();
  }

  if (user.hasOwnProperty("username")) {
    return (
      <>
        <nav className="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Welcome &nbsp;{user.nome}!
            </a>
            <button
              className="btn btn-info"
              type="button"
              style={{ color: "white", backgroundColor: "#0d6efd" }}
              onClick={handleLogout}
            >
              &nbsp; Logout
            </button>
          </div>
        </nav>
        <h3>{user.username}'s Profile</h3>
        <style jsx>{`
        h3 {
          color: white;
          font-size: 30px;
        }
      `}</style>
       <div style={styles}>
          <Link href="/cargo">Gerencia cargos</Link>
        </div>
      </>
    );
  }
  return <div><p>Welcome back soldier. <br /><br />Welcome to your empty profile.</p>
    <style jsx>{`
        p {
          color: white;
          font-size: 30px;
        }
      `}</style>
  </div>;
}
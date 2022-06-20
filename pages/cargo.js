import React, { useState } from "react";
import Router from "next/router";
import { cargoList, cargoDelete, whoAmI } from "../lib/auth";
import { removeToken, getToken } from "../lib/token";
import Link from "next/link";
import fontwhitecenter from '../styles/font-white-center';

const styles = {
  marginTop: 30,
  textAlign: "left",
};

export default function Cargo() {
  const [user, setUser] = useState({});
  const [cargos, setCargo] = useState([]);
  const [msg, setMessage] = useState("");

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
            const data = await whoAmI();
            console.log('Data: ' + JSON.stringify(data))

            var username = JSON.stringify(data.nome);
            console.log('user: ' + username);

            const cargos = await cargoList();
            console.log('Data CArgos: ' + JSON.stringify(cargos))

            if (data.error === "Unauthorized") {
              redirectToLogin();
            } else {
              setUser(data);
              setCargo(cargos);
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

  function handleDelete(id) {
    console.log('delete id:', id);
    (async () => {
      const status = await cargoDelete(id);
      if (status == 204) {
        setMessage("dados deletados")

        let intervalId = setTimeout(reload, 3000);
        console.log('Interval: ' + intervalId);

      }
    })();
  };

  function reload() {
    window.location.reload();
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

        <h3>{user.username}'s Profile </h3><br />

        <div style={styles}>
          <Link href="/cargo-register">Add</Link>
        </div>
        <p style={fontwhitecenter}>{msg}</p>
        <table border={1} >
          <tbody>
            <tr>
              <th>id</th>
              <th>descricao</th>
              <th>salario</th>
            </tr>
            {cargos.map((cargo, index) => (
              <tr key={index}>
                <td>{cargo.id}</td>
                <td>{cargo.descricao}</td>
                <td>{cargo.salario}</td>
                <td onClick={() => handleDelete(cargo.id)}>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>

        <style jsx>{`
        h3 {
          color: white;
          font-size: 30px;
        }

        table {
          color: white;
          font-size: 30px;
        }
      `}</style>
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
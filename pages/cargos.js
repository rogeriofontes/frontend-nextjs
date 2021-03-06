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
            //console.log("token dashboard1: ", token);
            const userData = await whoAmI();

            if (userData !== null) {
              console.log('Data: ' + JSON.stringify(userData))
              setUser(userData);
            }

            var email = JSON.stringify(userData.email);
            console.log('email: ' + email);

            const cargos = await cargoList();
            if (cargos != null) {
              console.log('Data CArgos: ' + JSON.stringify(cargos));
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

  function redirectToUpdate(id) {
    Router.push("/cargo-update/" + id);
  }

  function redirectToView(id) {
    Router.push("/cargo/" + id);
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


  if (user.hasOwnProperty("email")) {
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


        <p style={fontwhitecenter}>{msg}</p>
        <h3>{cargos.length == 0 ? "Empty" : "Not Empty"}!</h3>
        {cargos && cargos.length ? (

          <table border={1} >
            <tbody>
              <tr><th colSpan={5}><Link href="/cargo-register">Add</Link></th></tr>
              <tr>
                <th>id</th>
                <th>descricao</th>
                <th>salario</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
              {cargos.map((cargo, index) => (
                <tr key={index}>
                  <td>{cargo.id}</td>
                  <td onClick={() => redirectToView(cargo.id)}>{cargo.descricao}</td>
                  <td>{cargo.salario}</td>
                  <td onClick={() => redirectToUpdate(cargo.id)}>Edit</td>
                  <td onClick={() => handleDelete(cargo.id)}>Delete</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div style={styles}>
            "Lista Vazia"
            <Link href="/cargo-register">Add</Link>
          </div>
        )}
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
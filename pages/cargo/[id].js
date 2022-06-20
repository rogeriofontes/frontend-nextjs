import React, { useState } from "react";
import { Router, useRouter } from "next/router";
import { BaseLayout } from "../../components/Layout/Base";
import { CargoRegisterForm } from "../../components/Layout/Cargo";
import { whoAmI, cargoPorId } from "../../lib/auth";
import { getToken } from "../../lib/token";
import Link from "next/link";

const styles = {
  marginTop: 30,
  textAlign: "center",
};

const CargoUpdate = () => {
  const [user, setUser] = useState({});
  const [cargo, setCargo] = useState({});

  const router = useRouter();
  //const cargoId = router.query.id;
  //console.log("00cargo: ", cargoId);

  //const router = useRouter()

  const { id } = router.query

  console.log('Id Param -->: ' + id)

  React.useEffect(() => {
    if (!router.isReady) return;
    console.log('Id Param2 -->: ' + id)

    if (typeof window !== "undefined") {
      // const token = window.localStorage.getItem("token");
      //console.log("token dashboard: ", token);
      const token = getToken();

      if (!token) {
        redirectToLogin();
      } else {
        (async () => {
          try {

            const cargo = await cargoPorId(id);
            console.log('Data cargo: ' + cargo)

            console.log("token dashboard1: ", token);

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
              setCargo(cargo);
            }
          } catch (error) {
            console.log('Erro: ' + error);
            // If we receive any error, we should be redirected to the Login page
            //redirectToLogin();
          }
        })();
      }
    }
  }, [router.isReady]);

  function redirectToLogin() {
    Router.push("/login");
  }

  return (
    <div>
      <BaseLayout>
          <CargoRegisterForm 
          id={cargo.id} 
          descricaoa={cargo.descricao} 
          salario={cargo.salario} 
          areaAtuacao={cargo.areaAtuacao} 
          beneficios={cargo.beneficios} 
          salario={cargo.salario} 
          habilidadesDesejadas={cargo.habilidadesDesejadas} 
          competenciasDesejadas={cargo.competenciasDesejadas} 
          />
          <span>{cargo.id}</span>
           <div style={styles}>
          <Link href="/cargo">cargos</Link>
        </div>
      </BaseLayout>
    </div>
  );
};

export default CargoUpdate;
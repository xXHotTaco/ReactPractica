import React from "react";
import ReactDOM from "react-dom/client";
import { Greating, NuevaFuction } from "./Greating";
import Producto, {Navbar} from "./Product"

const root = ReactDOM.createRoot(document.getElementById("root"));

function Saludo() {
  return (
    <div>
      <h1>Soy de la funcion</h1>
      <p>Parrafo de Saludo</p>
    </div>
  );
}

function Nueva() {
  return (
    <div>
      <h1>Nueva funcion</h1>
      <p>Parrafo de Nueva</p>
    </div>
  );
}

function User() {
  const name = "carlos";
  return <h1>{name}</h1>;
}

function Merried() {
  const merried = true;

  return <h1>{merried ? "Estoy casado" : "No estoy"}</h1>;
}

//Para los objetos
function Objeto() {
  const user = {
    nombre: "Carlos",
    apellido: "Lopez",
  };
  return (
    <div>
      <h1>{user.nombre}</h1>
      <h1>{user.apellido}</h1>
    </div>
  );
}

function Doble() {
  function add(x, y) {
    return x + y;
  }

  return (
    <div>
      <h1>{add(10, 20)}</h1>
    </div>
  );
}

/* Siempre se necesita un contenedor padre para hacer 
   el render 
*/
root.render(
  <>
    <Saludo />
    <Nueva />
    <User />
    <Merried />
    <Objeto />
    <Doble />
    <Greating />
    <NuevaFuction />
    <Producto/>
    <Navbar/>
  </>
);

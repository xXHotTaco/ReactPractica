export function Greating(props) {
  console.log(props)
  return (
    <div>
      <h1>Soy de la funcion Greating</h1>
      <p>Parrafo de Saludo</p>
      <h1>{props.title}</h1>
    </div>
  );
}

// export function NuevaFuction(){
//     return <h1>Nueva funcion Greating</h1>
// }
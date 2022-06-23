import './App.css';
import Mensaje from './Mensaje'; //Importacion del módulo que contiene la función Mensaje
//Creando nuevos componentes
function Saludo(){
  return <h2>Esto es un H2 de un nuevo componente creado por mi</h2>
}

function Despedida(){
  return <h2>Esto es un H2 creado por mi y es un mensaje de final de página</h2>
}

function App() {//Los componentes son Funciones, siempre el nombre de la función se empieza a escribir en mayúscula
  const saludo = "Hola mundo desde variable"; //Tambien podemos llamar a variables poniendola entre llaver {saludo}, lo que va entre las llaves se le llama evaluar el contenido
  const num1 = 10;
  const num2 = 4;
  return ( //Esto no HTML, es JavaScript bonito para una mejor comprensión, se llama JSX, para comprobarlo entrar en https://babeljs.io y alli en Try It Out poner este codigo y lo enseña como sería en JS Vanilla
    <div className="App">
      Hola Mundo<br></br>
      {saludo + ", Estoy evaluando desde JSX"}<br></br>
      {num1 + num2}
      <p>Aqui va un texto</p>
      <Saludo />
      <Saludo />
      <Saludo />
      <Mensaje color="red" message="Esto hace"/>
      <Mensaje color="blue" message="El código más reutilizable"/>
      <Mensaje color="green" message="Con las props de propiedades(Parámetros)"/>
      <Despedida />      
    </div>
  );
}

export default App;

//Creo una función externa para llamarla desde el archivo App.js
function Mensaje(props){ //Los parámetros en React se les llaman props de propiedades
    return <h3 style={{color: props.color}}>{props.message}</h3> //Los atributos despues del igual se pasan como si fuesen un objeto
}

export default Mensaje;
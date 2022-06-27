/**
 * Refactorizamos el componente Header para poder pasarlo en el archivo index.js
 */


/**
 //Esta forma se le llama one line y lo hace más rápido así no hay que estar utilizando props todo el rato, tan solo retorna el primer parametro de la forma one line.
 *
 const Header = ({course}) => <h1>(course)</h1>
 */
const Header = (props) => {
    return <h1>{props.course}</h1>
}

export default Header;
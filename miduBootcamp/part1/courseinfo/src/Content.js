/**
 Refactorizamos el componente Content para asi poderlo pasar con props y poderlo utilizar multiples veces en el archivo index.js
 */

const Content = (props) => {
    return (
        <div>
            {props.content}
        </div>
    )
}

export default Content;
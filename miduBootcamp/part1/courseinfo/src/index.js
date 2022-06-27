import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import Total from './Total'


const App = () => {
  const course = {
    name: 'Half Stack application development @Samuel',
    //Creamos objetos i los ponemos dentro de un array
    parts: [ 
      {
      name: 'Fundamentals of React',
      exercises: 10
      },
      {
      name: 'Using props to pass data',
      exercises: 7
      },
      {
      name: 'State of a component',
      exercises: 14
      }
    ]
  }
  
  /*
  En primer lugar sacamos del objeto course el name,
  Seguido accedemos a los valores de las parts de tipo name para sacar los nombres y al estar en un Array tenemos que acceder a ellos, también concatenamos con el mismo valor de ese objeto para poder mostrarlo en el navegador el nombre y seguido los ejercicios,
  Y para finalizar accedemos a los valores exercises del objeto para mostrar un total de los ejercicios del curso, que procedemos a sumarlos.
  */
  return (
    <div>
      <Header course={course.name} />
      <p>
        <Content content={course.parts[0].name.concat(" " + course.parts[0].exercises)}/>
        <Content content={course.parts[1].name.concat(" " + course.parts[1].exercises)}/>
        <Content content={course.parts[2].name.concat(" " + course.parts[2].exercises)}/>
      </p>
      <p>Number of exercises <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} /></p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
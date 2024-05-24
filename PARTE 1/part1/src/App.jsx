const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  /*const parts = [
    {conteudo: 'Fundamentos da biblioteca React',exercises: 10},
    {conteudo: 'Usando props para passar dados',exercises: 7},
    {conteudo: 'Estado de um componente',exercises: 14},
  ]*/
  const part1 = {
    name: 'Fundamentos da biblioteca React',
    exercises: 10
  }
  const part2 = {
    name: 'Usando props para passar dados',
    exercises: 7
  }
  const part3 = {
    name: 'Estado de um componente',
    exercises: 14
  }

  const Header = (props) => {
    console.log(props)
    return(
      <div>
        <p>
          Curso: {props.course}
        </p>
      </div>
    )
  }

  const Part = (props) =>{

    return(
      <div>
        <p>
          Conteudo: {props.conteudo}, exercicios da secção: {props.exercises}
        </p>
      </div>
    )

  }

  const Content  = () => {
    
    return(
      <div>
        <Part conteudo={part1.name} exercises={part1.exercises} />
        <Part conteudo={part2.name} exercises={part2.exercises} />
        <Part conteudo={part3.name} exercises={part3.exercises} />
      </div>
    )

  }

  const Total  = (props) => {
    console.log(props)
    return(
      <div>
        <p>
          Total: {props.total}
        </p>
      </div>
    )

  }

  return (
    <div>
      <Header course={course} />
      <Content/>
      <Total total = {part1.exercises + part2.exercises+part3.exercises} />
    </div>
  )
}

export default App
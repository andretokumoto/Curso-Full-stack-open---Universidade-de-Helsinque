const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const parts = [
    {
      name: 'Fundamentos da biblioteca React',
      exercises: 10
    },
    {
      name: 'Usando props para passar dados',
      exercises: 7
    },
    {
      name: 'Estado de um componente',
      exercises: 14
    }
  ]

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
        <Part conteudo={parts[0].name} exercises={parts[0].exercises} />
        <Part conteudo={parts[1].name} exercises={parts[1].exercises} />
        <Part conteudo={parts[2].name} exercises={parts[2].exercises} />
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
      <Total total = {parts[0].exercises + parts[1].exercises+parts[2].exercises} />
    </div>
  )
}

export default App
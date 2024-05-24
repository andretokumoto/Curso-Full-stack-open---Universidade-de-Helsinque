const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const parts = [
    {conteudo: 'Fundamentos da biblioteca React',exercises: 10},
    {conteudo: 'Usando props para passar dados',exercises: 7},
    {conteudo: 'Estado de um componente',exercises: 14},
  ]

  const Header = (props) => {
    return(
      <div>
        <p>
          Curso: {props.titulo}
        </p>
      </div>
    )
  }
  const Content  = (props) => {
    console.log(props)
    return(
      <div>
        <p>
          Conteudo: {props.conteudo}, exercicios da secção: {props.exercises}
        </p>
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
      <Content conteudo={parts[0].conteudo} exercises={parts[0].exercises} />
      <Content conteudo={parts[1].conteudo} exercises={parts[1].exercises} />
      <Content conteudo={parts[2].conteudo} exercises={parts[2].exercises} />
      <Total total = {parts[0].exercises + parts[1].exercises+parts[2].exercises} />
    </div>
  )
}

export default App
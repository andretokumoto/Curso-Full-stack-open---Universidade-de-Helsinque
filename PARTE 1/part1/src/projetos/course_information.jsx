const Header = (props) => {
  console.log(props)
  return(
    <div>
      <p>
        Curso: {props.course.name}
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

const Content  = (props) => {
  
  return(
    <div>
      <Part conteudo={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part conteudo={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part conteudo={props.parts[2].name} exercises={props.parts[2].exercises} />
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


const CourseInformation = () => {

    const course = {
      name: 'Desenvolvimento de aplicação Half Stack',
      parts: [
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
    }
  

    return (
      <div>
        <Header course={course} />
        <Content/>
        <Total total = {course.parts[0].exercises + course.parts[1].exercises+ course.parts[2].exercises} />
      </div>
    )
  }
  
  export default CourseInformation
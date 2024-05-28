const Header = (props) => {
    console.log(props)
    return(
      <div>
        <p>
          Curso: {props.name}
        </p>
      </div>
    )
  }
  
  
  const Content  = ({part}) => {
    
    return(
      <div>
            <li>Curso: {part.name} exercicios: {part.exercises}</li>
      </div>
    )
  
  }
  
 /* const Total  = (props) => {
    console.log(props)
    return(
      <div>
        <p>
          Total: {props.total}
        </p>
      </div>
    )
  
  }*/
  
  const Course = (props)=>{
    const course = props.course

    return(
        <div>
            <b><Header name = {course.name}/></b>
            <ul>
                {course.parts.map(part=>
                    <Content key={part.id} part={part}/>
                )}
            </ul>

       </div>
    )
  }
  
  const CourseInformation = () => {
  

        const course = {
            id: 1,
            name: 'Half Stack application development',
            parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }
            ]
        }
       
        
        return <Course course={course} />
    
    }
    
    export default CourseInformation
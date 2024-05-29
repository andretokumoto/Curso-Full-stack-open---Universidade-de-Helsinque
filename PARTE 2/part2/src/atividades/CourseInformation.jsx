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
  
  const Total  = (props) => {
    console.log(props)
    const parts = props.parts

    const total = parts.reduce((sum, part) => sum + part.exercises, 0);

    return(
      <div>
        <p>
          Total: {total}
        </p>
      </div>
    )
  
  }
  
  const EachCourse = (props)=>{
    const course = props.course

    return(
        <div>
            <b><Header name = {course.name}/></b>
            <ul>
                {course.parts.map(part=>
                    <Content key={part.id} part={part}/>
                )}
            </ul>
             <Total parts = {course.parts}/>
        

       </div>
    )
  }

  const Courses = ({courses})=>{
   
    return(
        <div>
            <ul>
                {courses.map((course) =>(
                  <EachCourse key={course.id} name={course.name} course={course} /> 
                ))}
            </ul>
        </div>
    )

  }
  
  const CourseInformation = () => {
  

    const courses = [
        {
          name: 'Half Stack application development',
          id: 1,
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
            },
            {
              name: 'Redux',
              exercises: 11,
              id: 4
            }
          ]
        }, 
        {
          name: 'Node.js',
          id: 2,
          parts: [
            {
              name: 'Routing',
              exercises: 3,
              id: 1
            },
            {
              name: 'Middlewares',
              exercises: 7,
              id: 2
            }
          ]
        }
      ]
        
       
        return <Courses courses={courses} />
    
    }
    
    export default CourseInformation
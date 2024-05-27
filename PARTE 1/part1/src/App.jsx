import { useState } from 'react'
import CourseInformation from './projetos/course_information.jsx'
import Unicafe from './projetos/unicafe.jsx'


const Selecao = (props) =>{

      switch(props.opcao){

        case 1:
          <CourseInformation/>
          break
        case 2:
          <Unicafe/>
          break
      }
}


const App = () => {
  
      const [opcao,setOpcao]=useState(0)

      const clique = (projeto) =>{

        switch(projeto){
      
          case 'course': {
            setOpcao(1)
            break
          }
      
          case 'unicafe':{
            setOpcao(2)
            break
          }
          case 'anecdotes':{
            setOpcao(3)
            break
          }
          default:break
        }
      
      }
      const projeto = useState(0)
      return (
        <div>
        
            <b>
                FEDD BACK
            </b>
            <p>
              <button onClick={() => clique('course')}>Good</button>
              <button onClick={() => clique('unicafe')}>Neutral</button>
              <button onClick={() => clique('anecdotes')}>BAD</button>
            </p> 
    
        </div>
    
      )
    
}

export default App
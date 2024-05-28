import { useState } from 'react'
import CourseInformation from './projetos/course_information.jsx'
import Unicafe from './projetos/unicafe.jsx'
import Anecdotes from './projetos/anecdotes.jsx'



const Selecao = (props) => {
  switch (props.opcao) {
    case '1':
      return <CourseInformation />;
    case '2':
      return <Unicafe />;
    case '3':
         return <Anecdotes />;
    default:
      return null;
  }
};


const App = () => {
  
      const [opcao,setOpcao]=useState(0)

      const clique = (projeto) =>{

        switch(projeto){
      
          case 'course': {
            setOpcao('1')
            break
          }
      
          case 'unicafe':{
            setOpcao('2')
            break
          }
          case 'anecdotes':{
            setOpcao('3')
            break
          }
          default:break
        }
      
      }
     
      return (
        <div>
        
            <b>
                Seleção de Projeto
            </b>
            <p>
              <button onClick={() => clique('course')}>Course Information</button>
              <button onClick={() => clique('unicafe')}>Unicafe</button>
              <button onClick={() => clique('anecdotes')}>Anecdotes</button>
            </p> 
            <Selecao opcao={opcao}/>
        </div>
    
      )
    
}

export default App
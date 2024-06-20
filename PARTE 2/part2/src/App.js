import { useState } from 'react'
import SeccaoA from './atividades/seccaoA.jsx'
import CourseInformation from './atividades/CourseInformation.jsx'
import SeccaoB from './atividades/seccaoB.jsx'
import Phonebook from './atividades/phonebook.jsx'
import SeccaoC from './atividades/seccaoC.jsx'

//todos os codigos/projetos dessa parte são importdados para app.js
const Exibe = (props)=>{
  const notes = props.notes
  const selecao = props.select
  

  //faz a seleção de qual exercicio sera exibido de acordo com a entrada de select
  if(selecao==='a'){
    console.log(selecao)
     return(
      <div>
         <SeccaoA notes={notes}/>
      </div>
     )
  }
  else if (selecao==='Course') {
    return(
      <div>
        <CourseInformation/>
      </div>
    )    
  }

  else if (selecao==='b') {
    return(
      <div>
        <SeccaoB notes={notes}/>
      </div>
    )    
  }  

  else if (selecao==='phone') {
    return(
      <div>
        <Phonebook/>
      </div>
    )    
  }
  
  else if (selecao==='c') {
    return(
      <div>
        <SeccaoC/>
      </div>
    )    
  } 

  else {
    return(
      <div>
        Ainda nada
      </div>
    )
  }


}

const App = (props) => {
  
  const [opcao,setOpcao]=useState(0)

  const clique = (projeto) =>{
   // console.log(projeto)
    setOpcao(projeto)
    console.log(opcao)
 
  }
 
  return (
    <div>
    
        <b>
            Seleção de Projeto
        </b>
        <p>
          <button onClick={() => clique('Course')}>Course</button>
          <button onClick={() => clique('b')}>Seccção B</button>
          <button onClick={() => clique('phone')}>Phone Book</button>
          <button onClick={() => clique('c')}>Seccção C</button>
        </p> 
        <Exibe notes={props.notes} select={opcao}/>
    </div>

  )

}

export default App;

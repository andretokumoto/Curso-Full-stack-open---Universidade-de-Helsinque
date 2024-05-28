import SeccaoA from './atividades/seccaoA.jsx'
import CourseInformation from './atividades/CourseInformation.jsx'

//todos os codigos/projetos dessa parte são importdados para app.js
const Exibe = (props)=>{
  const notes = props.notes
  const selecao = props.select

  //faz a seleção de qual exercicio sera exibido de acordo com a entrada de select
  if(selecao==='a'){
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
  else {
    return(
      <div>
        Ainda nada
      </div>
    )
  }


}

function App (props) {
  return (
    <div>
        <Exibe notes={props} select='Course'/>
    </div>
  );
}

export default App;

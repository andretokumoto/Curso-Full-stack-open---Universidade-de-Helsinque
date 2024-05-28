import SeccaoA from './atividades/seccaoA.jsx'

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


}

function App (props) {
  return (
    <div>
        <Exibe notes={props} select='a'/>
    </div>
  );
}

export default App;

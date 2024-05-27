import { useState } from 'react'

const Average = (props)=>{
  return(
    <p>
       pontuação média: {props.ponderada/props.total}
    </p>  
  ) 
}


const TotalPositivo = (props)=>{
  const total = props.total
  const good = props.good
  return(
    <p>
      Porcentagem Positiva: {(good/total)*100}%
    </p>  
  ) 
}

const Estatisticas = (props)=>{
  const good = props.good
  const neutral = props.neutral
  const bad = props.good
  const ponderada = props.ponderada

  return(
    <div>
      <b>
      ESTÁTISTICAS
      </b>

      <p>
        GOOD: {good}
      </p>

      <p>
        NEUTRAL: {neutral}
      </p>

      <p>
        BAD: {bad}
      </p>
      

      <p>
        TOTAL: {good+bad+neutral}
      </p>

      <Average ponderada={ponderada} total = {good+bad+neutral} />
      <TotalPositivo good={good} total ={good+bad+neutral}/>

    </div>  
  )
    
  
}


const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [ponderada,setPonderada]=useState(0)


  const clique = (feedback) =>{

      switch(feedback){

        case 'good': {
          setGood(good+1)
          setPonderada(ponderada+1)
          break
        }

        case 'neutral':{
          setNeutral(neutral+1)
          break
        }
        case 'bad':{
          setBad(bad+1)
          setPonderada(ponderada-1)
          break
        }
        default:break
      }

  }


  return (
    <div>
    
     <b>
        FEDD BACK
     </b>
     <p>
       <button onClick={() => clique('good')}>Good</button>
       <button onClick={() => clique('neutral')}>Neutral</button>
       <button onClick={() => clique('bad')}>BAD</button>
     </p> 

     <Estatisticas good={good} neutral={neutral} bad={bad} ponderada={ponderada}/>

    </div>

  )
}

export default App
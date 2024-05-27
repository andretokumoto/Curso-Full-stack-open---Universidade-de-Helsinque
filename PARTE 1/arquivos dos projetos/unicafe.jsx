import { useState } from 'react'

const StatisticLine  = (props) => {

  return(
    <p>
       <table>
          <tr>
              <td>{props.text}</td>
              <td>{props.valor}</td>
          </tr>

       </table>
      
    </p>

  )


}

const Statistics = (props) => {

  const good = props.good
  const neutral = props.neutral
  const bad = props.good
  const ponderada = props.ponderada
  const total = good+bad+neutral
  const positiva = good/total

  if(total===0){
    return(
      <div>
        <p>
          Sem estatísticas
        </p>
      </div>
    )
  }
  else{
    return(
      <div>
          <StatisticLine text='good' valor = {good}/>
          <StatisticLine text='neutral' valor = {neutral}/>
          <StatisticLine text='bad' valor = {bad}/>
          <StatisticLine text='total' valor = {total}/>
          <StatisticLine text='pontuação média' valor = {ponderada/total}/>
          <StatisticLine text='Positiva' valor = {positiva*100}/>
      </div>

    )
  }

}

const Button = (props) => (
  <button onClick={props.handleClique}>
    {props.texto}
  </button>
)

const App = () => {
  
      const [good, setGood] = useState(0)
      const [neutral, setNeutral] = useState(0)
      const [bad, setBad] = useState(0)
      const [ponderada,setPonderada]=useState(0)

      const setFeedback = (feedback) =>{
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
              <Button handleClique={()=>setFeedback("good")} texto="good" />
              <Button handleClique={()=>setFeedback("neutral")} texto="neutral" />
              <Button handleClique={()=>setFeedback("bad")} texto="bad" />
            </p> 
            <Statistics good={good} neutral={neutral} bad={bad} ponderada={ponderada}/>

        </div>

      )
    
}

export default App
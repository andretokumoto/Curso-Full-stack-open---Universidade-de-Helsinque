import { useState } from 'react'

const App = () => {
  // salve os cliques de cada botão em seu próprio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      
      <b>
        FEDD BACK
      </b>

     <p>
      <button onClick={() => setGood(good+1)}>
            Good   
      </button>

      <button onClick={() => setNeutral(neutral+1)}>
            Neutral   
      </button>

      <button onClick={() => setBad(bad+1)}>
            BAD   
      </button>

     </p> 

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
       

    </div>
  )
}

export default App
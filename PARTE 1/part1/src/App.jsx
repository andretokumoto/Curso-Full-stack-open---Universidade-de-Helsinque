const Hello = (props) => {
  return (
    <div>
      <p>Olá  {props.nome}, você tem {props.idade} anos de idade</p>
    </div>
  )
}

const App = () => {
  const idade = 80
  const nome = 'Constantino Emanuell'
  return (
    <div>
      <h1>Olá a todos!</h1>

      <Hello nome ='André' idade={20+7} />
      <Hello nome = {nome} idade = {idade}/>
    </div>
  )
}

export default App




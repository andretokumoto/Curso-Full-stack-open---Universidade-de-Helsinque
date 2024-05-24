const App = () => {
  const amigos = [ 
      { nome: 'Andre', idade: 27 },
      { nome: 'Sebastião', idade: 90 },
    ]

  return (
    <div>
      <p>{amigos[0].nome} {amigos[0].idade}</p>
      <p>{amigos[1].nome} {amigos[1].idade}</p>
    </div>
  )
}

export default App
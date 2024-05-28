import { useState } from 'react'


const Button = (props) => (
    <button onClick={props.handleClique}>
      {props.texto}
    </button>
  )

const Anecdotes = () => {
  const anecdotes = [
    'Se fazer algo dói, faça isso com mais frequência.',
    'Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!',
    'Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.',
    'Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.',
    'Otimização prematura é a raiz de todo o mal.',
    'Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.',
    'Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.',
    'A única maneira de ir rápido é ir bem.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [votos, setVotos] = useState(Array(anecdotes.length).fill(0));

  const geraAleatorio=()=>{
    const numero = Math.floor(Math.random() * anecdotes.length);
    setSelected(numero);
  }

  const Voto=(valor)=>{

    const novoVoto = votos;
    novoVoto[valor]++;
    setVotos(novoVoto);
  }

  return (
    <div>
        <p>
            <Button handleClique={()=>geraAleatorio()} texto="Gerar Anedota" />
            <Button handleClique={()=>Voto(selected)} texto="Votar" />
        </p>
        <b>{anecdotes[selected]}</b> 
        <p>tem {votos[selected]} votos</p>
    </div>
  )
}

export default Anecdotes
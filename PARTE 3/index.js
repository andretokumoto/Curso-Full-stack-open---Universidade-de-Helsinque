const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('tiny'))

app.use(express.json())

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

let persons = [ 
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})
  
//-----------notes------------------------------------------  
app.get('/api/notes', (request, response) => {
    response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)
  
    if (note) {
      response.json(note)
    } else {
      response.status(404).end()
    }
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})

const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
  return maxId + 1
}

app.post('/api/notes', (request, response) => {
  const body = request.body

  if (!body.content) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  const note = {
    content: body.content,
    important: body.important || false,
    id: generateId(),
  }

  notes = notes.concat(note)

  response.json(note)
})

//------------persons-----------------------------------------

//retorna a lista telefonica
app.get('/api/persons', (request, response) => {
  response.json(persons)
})

//retorna informações da lista
app.get('/api/info',(request, response) => {
    const qtd_dados = persons.length
    const data_hoje = new Date();
    
    response.send(`<h1>pessoas na lista: ${qtd_dados}</h1><p>Data: ${data_hoje}</p>`);
})

//pega uma pessoa especifica da lista
app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(persons => persons.id === id)
  
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

//deletar um elemento da lista
app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const generateIdPhone = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => n.id))
    : 0
  return maxId + 1
}

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.content) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateIdPhone(),
  }

  if(!body.name || !body.number){
      return response.status(400).json({
        error:"nome ou telefone faltantes"
      })
  }
  const nameExists = persons.some(person => person.name === body.name);
  if (nameExists){
    return response.status(400).json({
      error: 'name must be unique'
    })
  }
  else{     
    persons = persons.concat(person)
    response.json(person)
  }
})

//-------------------------------------------------------------
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

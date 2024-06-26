
import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './Note.jsx'

const SeccaoD = () => {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const toggleImportanceOf = id => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
  
    axios.put(url, changedNote).then(response => {
      setNotes(notes.map(n => n.id !== id ? n : response.data))
    })
  }
  useEffect(() => {
    console.log('effect (efeito)')
    axios.get('http://localhost:3001/notes').then((response) => {
      console.log('promise fulfilled (promessa resolvida)')
      setNotes(response.data)
    })
  }, [])

  const addNote = (event) => {
    event.preventDefault()
    const new_id = notes.length + 1;

    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(new_id),
    }
  
    setNotes(notes.concat(noteObject))
    setNewNote('')

    axios
    .post('http://localhost:3001/notes', noteObject)
    .then(response => {
      console.log(response)
    })
  }

  const handleNoteChange = (event) => { 
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important === true)

return (
  <div>
    <h1>Notes parte D</h1>
    <div>
        <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'important' : 'all' }
            
        </button>
  </div>

    <ul>
        {notesToShow.map(note => 
          <Note
            key={note.id}
            note={note} 
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        )}
    </ul>

    <form onSubmit={addNote}>
    <input
      value={newNote}
      onChange={handleNoteChange}
    />
        <button type="submit">save</button>
    </form>  

  </div>
)
}


export default SeccaoD 
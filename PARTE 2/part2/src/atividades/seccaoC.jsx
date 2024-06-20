
import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './Note.jsx'

const SeccaoC = () => {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)


  useEffect(() => {
    console.log('effect (efeito)')
    axios.get('http://localhost:3001/notes').then((response) => {
      console.log('promise fulfilled (promessa resolvida)')
      setNotes(response.data)
    })
  }, [])
  console.log('render (renderiza)', notes.length, 'notes (notas)')

  // ...
}


export default SeccaoC 
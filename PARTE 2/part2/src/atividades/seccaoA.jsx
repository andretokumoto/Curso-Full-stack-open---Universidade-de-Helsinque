const Note = ({ note }) => {
    return (
      <li>{note.content}</li>
    )
  }


const SeccaoA = (props) => {
    const { notes } = props.notes
  
    return (
      <div>
        <h1>Notes</h1>
            <ul>
                {notes.map(note => 
                    <Note key={note.id} note={note} />
                )}
            </ul>
      </div>
    )
  }
  
  export default SeccaoA
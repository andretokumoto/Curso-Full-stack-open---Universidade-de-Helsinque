import { useState } from 'react'


const Phonebook = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const clique = (event) => {
    event.preventDefault();

    const newPerson = { name: newName };
    const AlredyExists = persons.some(person => person.name === newName);

    if (AlredyExists) {
      const message = `${newName} is already added to phonebook`;
      alert(message);
    } else {
      setPersons(persons.concat(newPerson));
      console.log({ persons: persons.concat(newPerson) });
    }
    setNewName(''); 
  };

  const handlePersonChange = (event) => { 
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const List = ({ persons }) => {
    return (
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={clique}>
        <div>
          Name: <input type='text' value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <List persons={persons}/>


      <div>debug: {newName}</div>
    </div>
  )
}

export default Phonebook
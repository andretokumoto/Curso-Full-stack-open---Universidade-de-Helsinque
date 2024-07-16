import { useState, useEffect } from 'react';
import noteService from '../services/persons.js';
import './phonebook.css'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className='error'>
      {message}
    </div>
  )
}


const List = ({ persons, filter, setPersons }) => {


  if (!persons) {
    return null;
  }

  const personsToShow = filter
    ? persons.filter((person) =>
        person.name && person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : persons;

  const deleteItem = (id) => {
    if (window.confirm("Deseja realmente excluir item?")) {
      console.log('deleta item da lista', { id });

      noteService.del(id).then(() => {
        setPersons(persons.filter(person => person.id !== id));
      })
      .catch(error => {
        console.error('Ocorreu um erro ao deletar o item', error);
      });

    }
  };

  return (
    <ul>
      {personsToShow.map((person) => (
        <li key={person.id}>
          {person.name} {person.number} <button onClick={() => deleteItem(person.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const Phonebook = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterSourch, setFilterSourch] = useState('');
  const [errorMessage, setErrorMessage] = useState('some error happened...')

  useEffect(() => {
    noteService.getAll().then((response) => {
      setPersons(response);
    });
  }, []);

  const clique = (event) => {
    event.preventDefault();
    const new_id = persons.length + 1;

    const newPerson = { name: newName, number: newNumber, id: String(new_id) };
    const AlredyExists = persons.some((person) => person.name === newName);

    if (AlredyExists) {
      setErrorMessage(
        `${newName} is already added to phonebook`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
     /* const message = `${newName} is already added to phonebook`;
      alert(message);*/


    } else {
      noteService.create(newPerson).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        console.log({ persons: persons.concat(returnedPerson) });

        setErrorMessage(
          `${newName} adicionado`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)


      });
    }

    setNewName('');
    setNewNumber('');
  };

  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setFilterSourch(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <div>
        Filter: <input onChange={handleFilterChange} value={filterSourch} />
      </div>
      <h2>Add New</h2>
      <form onSubmit={clique}>
        <div>
          Name: <input type="text" value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          Number: <input type="text" value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <List persons={persons} filter={filterSourch} setPersons={setPersons} />
    </div>
  );
};

export default Phonebook;

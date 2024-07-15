import { useState, useEffect } from 'react';
import noteService from '../services/persons.js';

const List = (props) => {
  const persons = props.persons;
  const filter = props.filter;

  if (!persons) {
    return null
  }

  const personsToShow = filter
    ? persons.filter((person) =>
        person.name && person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : persons;

  return (
    <ul>
      {personsToShow.map((person, index) => (
        <li key={index}>
          {person.name} {person.number}
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

  useEffect(() => {
    noteService.getAll().then((response) => {
      setPersons(response);
    });
  }, []);

  const clique = (event) => {
    event.preventDefault();
    const new_id = persons.length + 1;

    const newPerson = { name: newName, number: newNumber,id: String(new_id) };
    const AlredyExists = persons.some((person) => person.name === newName);

    if (AlredyExists) {
      const message = `${newName} is already added to phonebook`;
      alert(message);
    } else {
      noteService.create(newPerson).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        console.log({ persons: persons.concat(returnedPerson) });
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
      <div>
        Filter: <input onChange={handleFilterChange} value={filterSourch} />
      </div>
      <h2>Add New</h2>
      <form onSubmit={clique}>
        <div>
          Name:{' '}
          <input type="text" value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          Number:{' '}
          <input type="text" value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <List persons={persons} filter={filterSourch} />
    </div>
  );
};

export default Phonebook;

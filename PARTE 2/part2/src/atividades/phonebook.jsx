import { useState } from 'react';

const List = (props) => {
  const persons = props.persons
  const filter = props.filter
  
  const personsToShow = filter 
    ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons;

  return (
    <ul>
      {personsToShow.map((person, index) => (
        <li key={index}>{person.name} {person.number}</li>
      ))}
    </ul>
  );
};

const Phonebook = () => {
  
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '123456789'
    }
  ]); 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterSourch, setFilterSourch] = useState('');

  const clique = (event) => {
    event.preventDefault();

    const newPerson = { name: newName, number: newNumber };
    const AlredyExists = persons.some(person => person.name === newName);

    if (AlredyExists) {
      const message = `${newName} is already added to phonebook`;
      alert(message);
    } else {
      setPersons(persons.concat(newPerson));
      console.log({ persons: persons.concat(newPerson) });
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
        Filter: <input onChange={handleFilterChange} value={filterSourch}/>
      </div>

      <h2>Add New</h2>
      <form onSubmit={clique}>
        <div>
          Name: <input type='text' value={newName} onChange={handlePersonChange}/>
        </div>
        <div>Number: <input type='text' value={newNumber} onChange={handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <List persons={persons} filter={filterSourch}/>
    </div>
  );
};

export default Phonebook;

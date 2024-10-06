import React, { useState, useEffect } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneList from './components/PhoneList';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Загрузка данных из localStorage при загрузке компонента
  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  // Обновление localStorage при изменении контактов
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const editContact = (updatedContact) => {
    setContacts(contacts.map(contact => contact.id === updatedContact.id ? updatedContact : contact));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h1>Корпоративный телефонный справочник</h1>
      <PhoneForm addContact={addContact} />
      <input
        type="text"
        className="form-control mt-3"
        placeholder="Поиск..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <PhoneList
        contacts={filteredContacts}
        deleteContact={deleteContact}
        editContact={editContact}
      />
    </div>
  );
};

export default App;

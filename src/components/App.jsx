import React, { useEffect, useState } from 'react';
import ContactForm from './Form/Form';
import css from './AppStyle.module.css';
import { nanoid } from 'nanoid';
import SearchQuery from './SearchQuery/SearchQuery';
import ContactsList from './Contacts/ContactsList';
const CONTACTS = 'contacts';
// export const App = () => {
//   const [contacts, setContacts] = useState([
//     { id: 'id-1', name: 'Homer Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'John Doe', number: '443-89-12' },
//     { id: 'id-3', name: 'Bruce Wayne', number: '645-17-79' },
//     { id: 'id-4', name: 'Barry Allen', number: '227-77-76' },
//   ]);

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem(CONTACTS)) ?? []
  );
  const [filter, setFilter] = useState('');

  const addContacts = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const isExist = contacts.find(contact => contact.name === name);
    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts(state => [contact, ...state]);
  };

  const deleteContact = contactId => {
    setContacts(state => state.filter(contact => contact.id !== contactId));
  };
  const changeFilter = e => setFilter(e.currentTarget.value);

  useEffect(() => {
    window.localStorage.setItem(CONTACTS, JSON.stringify(contacts), [contacts]);
  });

  const getFilteredContacts = () => {
    const filterToLow = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLow)
    );
  };
  const filteredContacts = getFilteredContacts();
  return (
    <div className={css.mainSection}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContacts} />
      <h2>Contacts</h2>
      <SearchQuery value={filter} onChange={changeFilter} />
      <ContactsList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

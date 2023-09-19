import React, { Component } from 'react';
import ContactForm from './Form/Form';
import Contacts from './Contacts/Contacts';
import SearchQuery from './SearchQuery/SearchQuery';
import css from './AppStyle.module.css';
export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Homer Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'John Doe', number: '443-89-12' },
      { id: 'id-3', name: 'Bruce Wayne', number: '645-17-79' },
      { id: 'id-4', name: 'Barry Allen', number: '227-77-76' },
    ],
    filter: '',
  };

  componentDidMount() {
    const localData = localStorage.getItem('contacts');
    if (localData) {
      this.setState({ contacts: JSON.parse(localData) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addNewContact = data => {
    const result = this.state.contacts.some(
      contact => contact.name === data.name
    );

    if (result) {
      return alert(`${data.name} is already exist`);
    }

    this.setState(prev => ({ contacts: [data, ...prev.contacts] }));
  };

  filterContacts = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <section className={css.mainSection}>
        <h1>Phonebook</h1>
        <ContactForm addNewContact={this.addNewContact} />
        <Contacts
          contacts={this.getVisibleContacts()}
          deleteContact={this.deleteContact}
        >
          <SearchQuery
            value={this.state.filter}
            filterContacts={this.filterContacts}
          />
        </Contacts>
      </section>
    );
  }
}

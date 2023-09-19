import React, { Component } from 'react';
import css from './ContactsStyle.module.css';
export default class Contacts extends Component {
  render() {
    return (
      <div className={css.contactWrapp}>
        <h3>Contacts</h3>
        {this.props.children}
        <ul>
          {this.props.contacts.map(contact => (
            <li className={css.name} key={contact.id}>
              <p>
                {contact.name}: <span>{contact.number}</span>
              </p>
              <button
                type="button"
                onClick={() => this.props.deleteContact(contact.id)}
              >
                del
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

import Contacts from './Contacts';
import css from './ContactsStyle.module.css';
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactWrapp}>
      {contacts.map(({ id, name, number }) => (
        <Contacts
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        ></Contacts>
      ))}
    </ul>
  );
};
export default ContactList;

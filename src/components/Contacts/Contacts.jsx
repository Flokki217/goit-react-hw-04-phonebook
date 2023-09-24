import css from './ContactsStyle.module.css';
const Contacts = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={css.name}>
      {name}: {number}
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
};

export default Contacts;

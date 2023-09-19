import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './FormStyle.module.css';
export default class ContactForm extends Component {
  nameId = nanoid();
  numberId = nanoid();

  handleSubmit = e => {
    e.preventDefault();

    const userId = nanoid();

    this.props.addNewContact({
      id: userId,
      name: e.target.name.value,
      number: e.target.number.value,
    });

    e.target.name.value = '';
    e.target.number.value = '';
  };

  render() {
    return (
      <div>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameId}>
            Name:
            <span className={css.labelSpan}>___</span>
            <input
              className={css.input}
              id={this.nameId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я ]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor={this.numberId}>
            Number:
            <span className={css.labelSpan}>_</span>
            <input
              className={css.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button className={css.formBtn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

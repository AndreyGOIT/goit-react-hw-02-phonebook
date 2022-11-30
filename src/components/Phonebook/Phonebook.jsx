// Отделяйте именованные импорты, это повышает читаемость кода
import React, { Component } from 'react';
import styles from './Phonebook.module.css';
// import { nanoid } from 'nanoid';
// model.id = nanoid(); //=> "V1StGXR8_Z5jdHi6B-myT"

class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <section>
        <span className={styles.sectionTitle}>Phonebook</span>
        <div className={styles.phoneBookWindow}>
          <p className={styles.phoneBookWindow__title}>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type="button">Add contact</button>
        </div>
      </section>
    );
  }
}

export default Phonebook;

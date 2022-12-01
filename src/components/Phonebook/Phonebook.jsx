// Отделяйте именованные импорты, это повышает читаемость кода
import React, { Component } from 'react';
import styles from './Phonebook.module.css';
import Form from './Form';
// import { nanoid } from 'nanoid';
// model.id = nanoid(); //=> "V1StGXR8_Z5jdHi6B-myT"

class Phonebook extends Component {
  state = {
    contacts: [],
  };

  render() {
    return (
      <section>
        <span className={styles.sectionTitle}>Phonebook</span>
        <Form />
      </section>
    );
  }
}

export default Phonebook;

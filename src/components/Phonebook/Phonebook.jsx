// Отделяйте именованные импорты, это повышает читаемость кода
import React, { Component } from 'react';
import styles from './Phonebook.module.css';
import Form from './Form';

class Phonebook extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <section>
        <span className={styles.sectionTitle}>Phonebook</span>
        <Form onSubmit={this.formSubmitHandler} />
      </section>
    );
  }
}

export default Phonebook;

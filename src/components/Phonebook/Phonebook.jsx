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
    this.setState(({ contacts }) => contacts.push(data));
    // console.log(this.state);
    // console.log(this.state.contacts);
  };

  render() {
    const contacts = this.state.contacts;
    console.log(contacts);
    // const elements = contacts.map(({ name, number, id }) => <li id={id}>{name} {number}</li>);
    return (
      <>
        <section>
          <span className={styles.sectionTitle}>Phonebook</span>
          <Form onSubmit={this.formSubmitHandler} />
        </section>
        <section>
          <span className={styles.sectionTitle}>Contacts</span>
        </section>
      </>
    );
  }
}

export default Phonebook;

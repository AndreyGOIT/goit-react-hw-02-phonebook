// Отделяйте именованные импорты, это повышает читаемость кода
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Phonebook.module.css';
import Form from './Form';
import ContactsList from 'components/ContactsList/ContactsList';

class Phonebook extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    // console.log(data);
    this.setState(({ contacts }) => contacts.push(data));
  };

  render() {
    const contacts = this.state.contacts;

    return (
      <>
        <section>
          <span className={styles.sectionTitle}>Phonebook</span>
          <Form onSubmit={this.formSubmitHandler} />
        </section>
        {contacts.length !== 0 ? (
          <section>
            <span className={styles.sectionTitle}>Contacts</span>
            <ContactsList contacts={contacts} />
          </section>
        ) : (
          <section>
            <span className={styles.sectionTitle}>No Contacts</span>
          </section>
        )}
      </>
    );
  }
}

export default Phonebook;

Phonebook.prototypes = {
  state: PropTypes.shape({ contacts: PropTypes.arrayOf }),
};

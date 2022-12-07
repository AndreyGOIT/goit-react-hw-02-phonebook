import { Component } from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import Form from './Phonebook/Form';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  formSubmitHandler = data => {
    // console.log(data);
    this.setState(({ contacts }) => contacts.push(data));
  };

  render() {
    const contactsQuantity = this.state.contacts.length;
    return (
      <>
        <Form />
        {contactsQuantity > 0 ? (
          <ContactsList contacts={this.state.contacts} />
        ) : (
          <span
            style={{
              display: 'flex',
              fontWeight: 'bold',
              margin: 15,
            }}
          >
            There is no contacts yet
          </span>
        )}
      </>
    );
  }
}

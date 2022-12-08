import { Component } from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import Form from './Form/Form';

export class App extends Component {
  state = {
    contacts: [],
    // name: '',
    // number: '',
  };

  formSubmitHandler = data => {
    // console.log(data);
    this.setState(({ contacts }) => contacts.push(data));
  };

  render() {
    const contactsQuantity = this.state.contacts.length;
    console.log(contactsQuantity);
    return (
      <>
        <Form options={this.state} />
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

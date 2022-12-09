import { Component } from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import Form from './Form/Form';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  formSubmitHandler = data => {
    // console.log(data);
    this.setState(({ contacts }) => contacts.push(data));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
    console.log(this.state.filter);
  };

  render() {
    const contactsQuantity = this.state.contacts.length;
    console.log(contactsQuantity);
    const { filter } = this.state;
    return (
      <>
        <Form options={this.state} onSubmit={this.formSubmitHandler} />
        <Filter value={filter} onChange={this.changeFilter} />
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

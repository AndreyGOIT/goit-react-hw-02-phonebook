import { Component } from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import Form from './Form/Form';
import Filter from './Filter/Filter';

const INITIAL_STATE = {
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
export class App extends Component {
  state = { ...INITIAL_STATE };

  formSubmitHandler = data => {
    const contactsName = this.state.contacts.map(el => el.name);

    contactsName.includes(data.name)
      ? alert(`${data.name} is already in contacts.`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, data],
        }));
    // console.log(data);
    // this.setState(({ contacts }) => contacts.push(data));
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
        <p
          style={{
            display: 'flex',
            fontWeight: 'bold',
            margin: 15,
          }}
        >
          Phonebook
        </p>
        <Form options={this.state} onSubmit={this.formSubmitHandler} />
        <p
          style={{
            display: 'flex',
            fontWeight: 'bold',
            margin: 15,
          }}
        >
          Contacts
        </p>
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

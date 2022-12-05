import { Component } from 'react';

class ContactsList extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  render() {
    const contacts = this.props.contacts;

    return (
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ContactsList;

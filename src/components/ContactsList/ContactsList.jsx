import { Component } from 'react';

class ContactsList extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  render() {
    return (
      <ul>
        <li>{this.state.contacts}</li>
      </ul>
    );
  }
}
export default ContactsList;

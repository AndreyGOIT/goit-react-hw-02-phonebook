import { Component } from 'react';

class ContactsList extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  render() {
    console.log(this.state.contacts);
    return (
      <ul>
        {/* {this.state.contacts.map({ name, number, id }) => {
                return (
            <li key={id}>{name}: {number}</li>
                );
        }} */}
      </ul>
    );
  }
}
export default ContactsList;

// import { Component } from 'react';
import styles from './ContactsList.module.css';

export const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <section className={styles.section}>
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
// class ContactsList extends Component {
//   state = {
//     contacts: [],
//     name: '',
//     number: '',
//   };
//   render() {
//     const contacts = this.props.contacts;

//     return (
//       <section className={styles.section}>
//         <p className={styles.sectionTitle}>Contacts</p>
//         <ul>
//           {contacts.map(contact => {
//             return (
//               <li key={contact.id}>
//                 {contact.name}: {contact.number}
//               </li>
//             );
//           })}
//         </ul>
//       </section>
//     );
//   }
// }
// export default ContactsList;

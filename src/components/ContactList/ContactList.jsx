import React from 'react';
import { Button } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          {name}: {number}
          <Button onClick={() => onDeleteContact(id)}>Delete</Button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

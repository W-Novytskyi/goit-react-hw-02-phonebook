import React from 'react';
import { Container, Button } from './ContactList.styled';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <Container>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          {name}: {number}
          <Button onClick={() => onDeleteContact(id)}>Delete</Button>
        </li>
      ))}
    </Container>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;

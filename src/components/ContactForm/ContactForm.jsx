import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  ContainerForm,
  Container,
  Label,
  Input,
  Button,
} from './ContactForm.styled';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  onAddContact = () => {
    const { name, number } = this.state;
    const id = nanoid();

    if (name !== '' && number !== '') {
      const newContact = { id, name, number };
      this.props.onAddContact(newContact);
      this.reset();
    }
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <ContainerForm>
        <Container>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleChange}
            />
          </Label>
        </Container>
        <Container>
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleChange}
            />
          </Label>
        </Container>
        <Button type="button" onClick={this.onAddContact}>
          Add contact
        </Button>
      </ContainerForm>
    );
  }
}

export default ContactForm;

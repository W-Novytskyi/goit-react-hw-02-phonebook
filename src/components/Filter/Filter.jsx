import React from 'react';
import { Container, Label, Input } from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <Container>
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  </Container>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

import React from 'react';
import { Container, Label, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <Container>
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  </Container>
);

export default Filter;

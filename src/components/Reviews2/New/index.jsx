import React from 'react';
import Header from '../../shared/Header';
import Form from '../Form';
import { Container } from 'react-bootstrap';

const New = () => {
  return (
    <>
      <Header title="Reviews2">
       
      </Header>

      <Container>
        <Form endpoint="reviews2"/>
      </Container>
    </>
  );
}
 
export default New;

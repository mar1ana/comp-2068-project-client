import React from 'react';
import Header from '../../shared/Header';
import Form from '../Form';
import { Container } from 'react-bootstrap';

const New = () => {
  return (
    <>
      <Header title="Reviews3">
       
      </Header>

      <Container>
        <Form endpoint="reviews3"/>
      </Container>
    </>
  );
}
 
export default New;

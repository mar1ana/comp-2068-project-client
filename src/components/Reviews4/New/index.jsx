import React from 'react';
import Header from '../../shared/Header';
import Form from '../Form';
import { Container } from 'react-bootstrap';

const New = () => {
  return (
    <>
      <Header title="Reviews4">
       
      </Header>

      <Container>
        <Form endpoint="reviews4"/>
      </Container>
    </>
  );
}
 
export default New;

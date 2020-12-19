import React from 'react';
import Header from '../../shared/Header';
import Form from '../Form';
import { Container } from 'react-bootstrap';
import '../style.css';

const New = () => {
  return (
    <>
      <Header title="Reviews" class="font">
       Write Your New Review
      </Header>

      <Container>
        <Form endpoint="reviews"/>
      </Container>
    </>
  );
}
 
export default New;

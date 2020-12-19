import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Form from '../Form';
import Axios from 'axios';
import Header from '../../shared/Header';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';
import { Container } from 'react-bootstrap';

const Edit = () => {
  const { id } = useParams();
  const [preload, setPreload] = useState({});
  const { globalStore } = useContext(GlobalStoreContext);
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/reviews2/${id}`)
    .then(({ data }) => {
      setPreload(data);
    })
    .catch(error => {
      setNotification({
        type: "danger",
        message: `There was an issue performing this action: ${error.message}`
      });
    });
  }, [globalStore, id, setNotification]);

  return (
    preload ? (
    <>
      <Header title="Edit Review">
        Edit Movie Review.
      </Header>

      <Container>
        <Form endpoint="reviews2/update" preload={ preload }/>
      </Container>
    </>
    ) : null
  );
}
 
export default Edit;

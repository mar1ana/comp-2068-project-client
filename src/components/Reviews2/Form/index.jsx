import React, { useState, useContext, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios';
import { UserContext } from '../../Authentication/UserProvider';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';
import { Redirect } from 'react-router-dom';

const ReviewForm = ({ endpoint, preload, buttonLabel }) => {
  const { user } = useContext(UserContext); 
  const { setNotification } = useContext(NotificationContext);  
  const { globalStore } = useContext(GlobalStoreContext);
  const [redirect, setRedirect] = useState(false); 
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    setInputs({...preload});
  }, [preload]) 

  const handleChange = event => {
    event.persist();
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log(inputs);
    if (inputs && inputs.review) {
    Axios.post(`${globalStore.REACT_APP_ENDPOINT}/${endpoint}`, {
      ...inputs,
      secret_token: (user && user.token)
    })
    .then(({ data }) => {
      if (data) {
        setNotification({
          type: "success",
          message: "Review was updated successfully!"
        });
      }
      setRedirect(true);
    })
    .catch((error) => {
      setNotification({
        type: "danger",
        message: `There was an error updating the review: ${error.message}`
      });
    });
  }
  };

  return (
    redirect ? (
     <Redirect to="/reviews2"/>
    ) : (    
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control          
            onChange={handleChange} 
            name="rating" 
            placeholder="rating"
            defaultValue={inputs.rating}
            />
        </Form.Group>  

        <Form.Group>
          <Form.Label>Review</Form.Label>
          <Form.Control as="textarea" 
            onChange={handleChange} 
            name="review" 
            placeholder="review"
            defaultValue={inputs.review}
          />
        </Form.Group>
        
        <Form.Group>
        <Button type="submit">{ buttonLabel || "Post" }</Button>
          </Form.Group>
      </Form>    
    )
  );  
}

 
export default ReviewForm;

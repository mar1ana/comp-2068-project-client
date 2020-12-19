import React, { useContext, useState, useEffect } from 'react';
import { NotificationContext } from '../shared/Notifications';
import { GlobalStoreContext } from '../shared/Globals';
import { UserContext } from '../Authentication/UserProvider';
import Axios from 'axios';
import Header from '../shared/Header';
import { Container, Media, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

const Reviews = () => {
  const { user } = useContext(UserContext);
  const [reviews, setReviews] = useState([]);
  const { setNotification } = useContext(NotificationContext);
  const { globalStore } = useContext(GlobalStoreContext);

  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/reviews4`)
    .then(({ data }) => {
      setReviews(data);
      setNotification({
        type: "success",
        message: "This action was performed successfully."
      });

    })
    .catch(error => {
      setNotification({
        type: "danger",
        message: `There was an error retrieving the reviews: ${error.message}`
      });
    });
  }, [globalStore, setNotification]);

  return (
    reviews ? (
    <>        
      <Header title="Joker">
      
      <img
          src="https://media.giphy.com/media/A7ZbCuv0fJ0POGucwV/giphy.gif"
          width={250}
          height={250}
          class= "center"
          position= "right"
          className="mr-4"
          alt="joker-gif"
        />  
      </Header>
      <Container>
        <div>
      {user && user.token ? (
        <Link to="/reviews4/new">
          <Button>Write New Review</Button> 
        </Link>  
        ) : null}
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Media>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg"
          width={220}
          height={320}
          display= "inline"
          className="mr-5"
          alt="joker"
        />    
        
        <Media.Body> 
          {reviews && reviews.length > 0 ? (
          reviews.map((review, i) => (
          <Table striped bordered hover>         
              <tr key={i}>
                <th>Name</th>
                <td>{review.critic}</td>
              </tr>
              <tr>
                <th>Rating</th>
                <td>{review.rating}</td>
              </tr>
              <tr>  
                <th>Review</th>
                <td>{review.review}</td>
              </tr>                             
                <td width="200" >
                  {user && user.token ? (
                
                <Link to={`/reviews4/edit/${review._id}`}>
                  <Button >Edit</Button>
                </Link>
              ) : null}
               &nbsp;&nbsp;&nbsp;
              {user && user.token ? (
              <Link to={`/reviews4/destroy/${review._id}`}>
              <Button>Delete</Button>             
            </Link>       
              ) : null}
            </td>         
          </Table>

     
          ))
        ) : null}
          </Media.Body>
        </Media>
      </Container>
    </>
    ) : null
  );
}
 
export default Reviews;

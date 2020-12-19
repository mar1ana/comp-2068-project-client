import React from 'react';
import { Container, Media } from 'react-bootstrap';
import Header from '../../shared/Header';

const Home = () => {
  return (
    <>
      <Header title="Mo Rev">
      <p>
        <strong>Honest Movie Reviews</strong>
      </p>

        
      </Header>

      <Container>
        <hr/>
        <Media>
        <div>
        <img
          src="https://i2.wp.com/voicesfilm.com/wp-content/uploads/2013/12/malcolm-x.jpg?resize=800%2C1200"
          width={220}
          height={320}
          display= "inline"
          className="mr-5"
          alt="malcolm-x"
        /> 
        <p text-align='center'>
         <strong>Malcolm X</strong> 
        </p>
        <p>
          <strong>Directed by Spike Lee</strong>
        </p>
        </div>

        <div>
        <img
          src="https://i2.wp.com/voicesfilm.com/wp-content/uploads/2016/04/83176763.jpg"
          width={220}
          height={320}
          display= "inline"
          className="mr-5"
          alt="fight-club"
        />
        <p>
          <strong>Fight Club</strong>
        </p>
        <p>
          <strong>Directed by David Fincher</strong>
        </p>          
        </div>

        <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/1/19/Titanic_%28Official_Film_Poster%29.png"
          width={220}
          height={320}
          display= "inline"
          className="mr-5"
          alt="titanic"
        />
        <p>
          <strong>Titanic</strong>
        </p>
        <p>
          <strong>Directed by James Cameron</strong>
        </p>          
        </div>

        <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg"
          width={220}
          height={320}
          display= "inline"
          className="mr-5"
          alt="joker"
        />
        <p>
          <strong>Joker</strong>
        </p>
        <p>
          <strong>Directed by Todd Phillips</strong>
        </p>          
        </div>
        </Media>
        

      </Container>
    </>
  );
}
 
export default Home;

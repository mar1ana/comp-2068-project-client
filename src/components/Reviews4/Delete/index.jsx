
import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';
import { UserContext } from '../../Authentication/UserProvider';
import { Redirect } from 'react-router-dom';

const Delete = () => {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const { globalStore } = useContext(GlobalStoreContext);
  const { setNotification } = useContext(NotificationContext);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    
    Axios.post(`${globalStore.REACT_APP_ENDPOINT}/reviews4/destroy`, { _id: id, 
      secret_token: (user && user.token)
    })
   .then(() => {
        setNotification({
            type: "success",
            message: "This action was performed successfully."
          });
          setRedirect(true);
    }).catch((err)=>console.log(err.message))    
  }, [globalStore, id, setNotification, user ]);

 return (
    redirect ? (
   <Redirect to="/reviews4"/>  
    ) : null
  ); 
}
 
export default Delete;

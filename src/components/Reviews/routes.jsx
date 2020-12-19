import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserContext } from '../Authentication/UserProvider';

import Index from './index';
import New from './New';
import Edit from './Edit';
import Delete from './Delete';

const Routes = () => {
  const { user } = useContext(UserContext);

  return (
    <Switch>
      <Route exact path="/reviews" component={Index}/>

      {user && user.token ? (
        <>
          <Route exact path="/reviews/new" component={New}/>
          <Route exact path="/reviews/edit/:id" component={Edit}/>
          <Route exact path="/reviews/destroy/:id" component={Delete}/>
        </>
      ) : null}
    </Switch>
  );
}
 
export default Routes;

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
      <Route exact path="/reviews2" component={Index}/>

      {user && user.token ? (
        <>
          <Route exact path="/reviews2/new" component={New}/>
          <Route exact path="/reviews2/edit/:id" component={Edit}/>
          <Route exact path="/reviews2/destroy/:id" component={Delete}/>
        </>
      ) : null}
    </Switch>
  );
}
 
export default Routes;

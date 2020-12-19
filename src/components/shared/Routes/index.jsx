import React from 'react';
import PageRoutes from '../../Pages/routes';
import UserRoutes from '../../Users/routes';
import AuthenticationRoutes from '../../Authentication/routes';
import ReviewRoutes from '../../Reviews/routes';
import Review2Routes from '../../Reviews2/routes';
import Review3Routes from '../../Reviews3/routes';
import Review4Routes from '../../Reviews4/routes';

const Routes = () => {
  return (
    <>
      <PageRoutes/>
      <UserRoutes/>
      <AuthenticationRoutes/>
      <ReviewRoutes/>
      <Review2Routes/>
      <Review3Routes/>
      <Review4Routes/>
    </>
  );
}
 
export default Routes;

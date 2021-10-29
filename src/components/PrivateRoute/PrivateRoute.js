import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <svg className="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24"></svg>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{ pathname: '/sign-in-up', state: { from: location } }}
          />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;

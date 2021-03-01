import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import SignIn from '../../pageComponent/SignIn/SignIn.component';
import SignUp from '../../pageComponent/SignUp/SignUp.component';
import Products from '../../pageComponent/Products/Products.component';
import EditUser from '../../pageComponent/EditUser/EditUser.component';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const App: React.FC = () => {
  const isAuth = useTypedSelector(({ user }) => user.isAuth)

  return (
    <>
      {
        !isAuth && (<Switch>
          <Route path="/login" exact component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Redirect to="/login"/>
        </Switch>)
      }
      {
        isAuth && (<Switch>
          <Route path="/products" exact component={Products} />
          <Route path="/edit-user" component={EditUser} />
          <Redirect to="/products"/>
        </Switch>)
      }
    </>
  );
}

export default App;
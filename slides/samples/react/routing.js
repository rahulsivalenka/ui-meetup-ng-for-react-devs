import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';

const Pages = () => {
  return (
    <Switch>
      <Route to="/about" component={AboutView} />
      <Route to="/posts/edit/:postId" component={EditPostView} />
      <Route to="/posts" component={PostsList} />
      <Route to="/404" component={PageNotFound} />
      <Route exact to="/" component={Home} />
      <Route>
        <Redirect to="/404" />
      </Route>
    </Switch>
  );
};

import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Link path="/posts/edit/1">Edit Post 1</Link>

      <Pages />
    </BrowserRouter>
  );
};

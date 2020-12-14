import React from 'react';
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

const PostsView = () => {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <Link to={`${url}/details/2`}>View Post 2 Details</Link>

      <Switch>
        <Route path={`${path}/details/:postId`} component={PostDetails} />
        <Route path={`${path}/edit/:postId`} component={EditPosts} />
        <Route path={`${path}`} component={PostsList} />
      </Switch>
    </div>
  );
};

const Pages = () => {
  return (
    <Switch>
      <Route path="/about" component={AboutView} />
      <Route path="/posts" component={PostsView} />
      <Route path="/404" component={PageNotFoundView} />
      <Route exact path="/" component={HomeView} />
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
      <Link to="/posts/edit/1">Edit Post 1</Link>

      <Pages />
    </BrowserRouter>
  );
};

import React from 'react';
import { Route } from 'react-router-dom';
import Posts from './components/Posts';
import PostDetails from './components/PostDetails';

const BaseRouter = () => (
  <div>
    <Route exact path='/' component={Posts} />
    <Route exact path='/:articleID' component={PostDetails} />
  </div>
);

export default BaseRouter;

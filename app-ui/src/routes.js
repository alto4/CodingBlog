import React from 'react';
import { Route } from 'react-router-dom';
import Posts from './components/Posts';
import PostDetails from './components/PostDetails';
import PostForm from './components/PostForm';
import SignIn from './components/SignIn';

const BaseRouter = () => (
  <div>
    <Route exact path='/' component={Posts} />
    <Route exact path='/add' component={PostForm} />
    <Route exact path='/signin' component={SignIn} />
    <Route exact path='/:articleID' component={PostDetails} />
  </div>
);

export default BaseRouter;

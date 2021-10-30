import React from 'react';
import { Route } from 'react-router-dom';
import Posts from './components/Posts';
import PostDetails from './components/PostDetails';
import CreatePost from './components/CreatePost';
import SignIn from './components/SignIn';

const BaseRouter = () => (
  <div>
    <Route exact path='/' component={Posts} />
    <Route exact path='/:articleID' component={PostDetails} />
    <Route exact path='/add' component={CreatePost} />
    <Route exact path='/signin' component={SignIn} />
  </div>
);

export default BaseRouter;

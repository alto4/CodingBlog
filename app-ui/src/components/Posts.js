import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import PostItem from './PostItem';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api');
        const savedPosts = res.data;

        setPosts(savedPosts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container padding={5} justifyContent='center'>
      <Grid item textAlign='left' xs={12} md={10} lg={7}>
        <Typography to='/add' variant='button' component={Link} color='inherit'>
          + Create a New Post
        </Typography>
      </Grid>

      {posts.map((post) => (
        <PostItem post={post} key={post.title} />
      ))}
    </Grid>
  );
};

export default Posts;

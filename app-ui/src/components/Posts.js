import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
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
        console.log(posts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, [posts]);

  return (
    <Grid container padding={5} justifyContent='center'>
      {posts.map((post) => (
        <PostItem post={post} key={post.title} />
      ))}
    </Grid>
  );
};

export default Posts;

import React, { useEffect, useState } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PostDetails = (props) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postID = props.match.params.postID;
        const res = await axios.get(`http://localhost:8000/api/${postID}`);
        const savedPost = res.data;

        setPost(savedPost);
        console.log(post);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deletePost = async () => {
    try {
      const postID = props.match.params.postID;
      const res = await axios.delete(`http://localhost:8000/api/${postID}`);

      console.log(res);
      console.log(`Successfully deleted post #${postID}`);

      props.history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  const { title, content } = post;
  const postID = props.match.params.postID;

  return (
    <Grid
      container
      item
      xs={12}
      md={10}
      lg={7}
      py={2}
      px={6}
      justifyContent='center'
      flexDirection='column'
      style={{ margin: '2rem auto' }}
    >
      <Typography variant='h1' m={2} textAlign='center'>
        {title}
      </Typography>
      <Typography
        to={{ pathname: `/edit/${postID}`, post: post }}
        variant='button'
        component={Link}
        color='inherit'
        my={2}
      >
        + Edit Post
      </Typography>
      <p>{content}</p>
      <Button onClick={deletePost} color='error' variant='contained' sx={{ mt: 6, mb: 2 }} style={{ width: '200px' }}>
        Delete Post
      </Button>
    </Grid>
  );
};

export default PostDetails;

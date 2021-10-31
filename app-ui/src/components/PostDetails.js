import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
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
      <Typography to={{ pathname: `/edit/${postID}`, postID }} variant='button' component={Link} color='inherit' my={2}>
        + Edit Post
      </Typography>
      <p>{content}</p>
    </Grid>
  );
};

export default PostDetails;

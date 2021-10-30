import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import axios from 'axios';

const PostDetails = (props) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postID = props.match.params.articleID;
        const res = await axios.get(`http://localhost:8000/api/${postID}`);
        const savedPost = res.data;

        setPost(savedPost);
        console.log(post);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();
  }, [post, props.match.params.articleID]);

  const { title, content } = post;

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
      <p>{content}</p>
    </Grid>
  );
};

export default PostDetails;

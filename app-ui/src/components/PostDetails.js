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
    <Grid container padding={5} justifyContent='center' flexDirection='column' a>
      <Typography variant='h1'>{title}</Typography>
      <p>{content}</p>
    </Grid>
  );
};

export default PostDetails;

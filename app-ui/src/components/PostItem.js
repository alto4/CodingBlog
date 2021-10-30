import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
  return (
    <Grid container item xs={12} md={10} lg={7} m={2} p={2} style={{ border: '1px solid #aaa', borderRadius: '.5rem' }}>
      <Grid item xs={12}>
        <Link to={`/${post.id}`}>
          <Typography variant='h2'>{post.title}</Typography>
        </Link>
      </Grid>
      <p>{post.content.split('.')[0]}</p>
    </Grid>
  );
};

export default PostItem;

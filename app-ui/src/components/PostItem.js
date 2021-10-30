import React from 'react';
import { Grid } from '@mui/material';

const PostItem = ({ post }) => {
  return (
    <Grid container item xs={12} md={10} lg={7} m={2} p={2} style={{ border: '1px solid #aaa', borderRadius: '.5rem' }}>
      <Grid item xs={12}>
        <h2>{post.title}</h2>
      </Grid>
      <p>{post.content.split('.')[0]}</p>
    </Grid>
  );
};

export default PostItem;

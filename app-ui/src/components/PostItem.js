import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const PostItem = ({ post: { title, id, description } }) => {
  return (
    <Grid container item xs={12} md={10} lg={7} m={2} p={2} style={{ border: '1px solid #aaa', borderRadius: '.5rem' }}>
      <Grid item xs={12}>
        <Link to={`/${id}`}>
          <Typography variant='h2'>{title}</Typography>
        </Link>
      </Grid>
      <p>{description}</p>
    </Grid>
  );
};

export default PostItem;

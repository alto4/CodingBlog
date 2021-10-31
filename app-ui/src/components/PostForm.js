import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [url, setURL] = useState('');

  const handleSubmit = async (e, type, articleID) => {
    e.preventDefault();
    console.log('Form submit handled here.');

    const newPost = { title, description, content, url };
    console.log(newPost);

    switch (type) {
      case 'post':
        try {
          const res = await axios.post('http://localhost:8000/api/', newPost);
          console.log(res);
        } catch (error) {
          console.error(error);
        }
        break;
      case 'put':
        try {
          const res = await axios.put(`http://localhost:8000/api/${articleID}/`, newPost);
          console.log(res);
        } catch (error) {
          console.error(error);
        }
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component='h1' variant='h1'>
            Create a New Post
          </Typography>
          <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='title'
              label='Title'
              name='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='description'
              label='Description'
              id='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              margin='normal'
              required
              multiline
              rows={10}
              fullWidth
              name='content'
              label='Content'
              id='content'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <TextField
              margin='normal'
              fullWidth
              name='url'
              label='Video URL (Optional)'
              id='url'
              value={url}
              onChange={(e) => setURL(e.target.value)}
            />
            <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='#' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>{' '}
        </Box>
      </Container>
    </>
  );
};

export default PostForm;

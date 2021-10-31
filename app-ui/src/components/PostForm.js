import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const PostForm = (props, { requestType, formType }) => {
  const [postID, setPostID] = useState(window.location.pathname.split('/edit/')[1]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [url, setURL] = useState('');

  useEffect(() => {
    //const postID = props.match.params.postID;

    if (postID) {
      console.log('Post id: ' + postID);

      const fetchPostDetails = async () => {
        try {
          const res = await axios.get(`http://localhost:8000/api/${postID}`);
          console.log(res.data);
          const savedPost = res.data;

          setTitle(savedPost.title);
          setDescription(savedPost.description);
          setContent(savedPost.content);
          setURL(savedPost.url);
        } catch (error) {
          console.error(error);
        }
      };

      fetchPostDetails();
    }
  }, []);

  const handleSubmit = async (e, type, postID) => {
    console.log('Form submit handled here. Type: ' + type);

    const newPost = { title, description, content, url };
    console.log(newPost);

    switch (type) {
      case 'post':
        console.log('Creating a new post.');
        try {
          const res = await axios.post('http://localhost:8000/api/', newPost);
          console.log(res);

          props.history.push('/');
        } catch (error) {
          console.error(error);
        }
        break;
      case 'put':
        console.log('Editing an existing post.');
        try {
          const res = await axios.put(`http://localhost:8000/api/${postID}/`, newPost);
          console.log(res);
          props.history.push('/');
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
            {props.formType === 'add' ? 'Create a New Post' : `Edit Post #${postID}`}
          </Typography>
          <Box component='form' onSubmit={(e) => handleSubmit(e, props.requestType, postID)} noValidate sx={{ mt: 1 }}>
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
            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
              {props.formType === 'add' ? 'Create Post' : 'Update Post'}
            </Button>
          </Box>{' '}
        </Box>
      </Container>
    </>
  );
};

export default PostForm;

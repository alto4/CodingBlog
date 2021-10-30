import './App.css';
import Navbar from './components/layouts/Navbar';
import { theme } from './assets/theme';
import { ThemeProvider } from '@emotion/react';
import { Grid } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        <Grid container padding={5} justifyContent='center'>
          <h1>Learning Blog</h1>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;

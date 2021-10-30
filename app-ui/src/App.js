import BaseRouter from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Navbar from './components/layouts/Navbar';
import { theme } from './assets/theme';
import { ThemeProvider } from '@emotion/react';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <BaseRouter />
      </Router>
    </ThemeProvider>
  );
}

export default App;

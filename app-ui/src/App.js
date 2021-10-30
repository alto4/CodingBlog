import './App.css';
import Navbar from './components/layouts/Navbar';
import { theme } from './assets/theme';
import { ThemeProvider } from '@emotion/react';
import Posts from './components/Posts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        <Posts />
      </div>
    </ThemeProvider>
  );
}

export default App;

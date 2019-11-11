import React from 'react';
import logo from './img/logo.jpg';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import './styles/styles.scss';

import Beads from './components/Beads.jsx';
import theme from '../src/utils/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Diseña tu mordedera</h1>
        </header>

        <main>
          <Beads />
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;

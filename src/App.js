import React from 'react';
import logo from './img/logo.jpg';
import { ThemeProvider } from 'styled-components';
import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import './index.css';

import Preview from './components/Preview.jsx';
import Beads from './components/Beads.jsx';
import theme from '../src/utils/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <DndProvider backend={HTML5Backend}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Diseña tu mordedera</h1>
          </header>

          <main>
            <section>
              <Beads />
            </section>
            <section>
              <Preview />
            </section>
          </main>
        </DndProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

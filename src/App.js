import React from 'react';
import logo from './img/logo.jpg';
import { ThemeProvider } from 'styled-components';
import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import './index.css';

import Beads from './components/Beads.jsx';
import Board from './components/Board.jsx';
import Letters from './components/Letters.jsx';
import Preview from './components/Preview.jsx';
import theme from '../src/utils/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Diseña tu mordedera</h1>
        </header>

        <main className="flexbox">
          <Board id="Board-1" className="board">
            <Beads />
            <Letters />
          </Board>
          <Board id="Board-2" className="board">
            <div id="snaptarget" />
          </Board>
        </main>

      </ThemeProvider>
    </div>
  );
}

export default App;

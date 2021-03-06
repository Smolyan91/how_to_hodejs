import React from 'react';

import Editor from './components/editor/index';
import NodeActiveBoard from './components/nodeActiveBoard';
import Pane from './components/pane/index';

import './App.css';

function App() {
  return (
    <div className="App">
      <Pane />
      <Editor />
      <NodeActiveBoard />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

import Posts from './components/Posts';

function App() {
  return (
    <div className="container">
      <h1 className="text-center">Posts App</h1>
      <hr />
      <Posts />
    </div>
  );
}

export default App;

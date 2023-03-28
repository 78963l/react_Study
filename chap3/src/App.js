import React, { useState } from 'react';
import './App.css';
import Box from './Box';

function App() {
  return (
    <div className="App">
      <Box name='첫번째 박스' num='1'/>
      <Box name='두번째 박스' num='2'/>
      <Box name='세번째 박스' num='3'/>
    </div>
  );
}

export default App;

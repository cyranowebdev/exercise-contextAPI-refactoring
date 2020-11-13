import React from 'react';
import ContextProvider from './context/ContextProvider';
import './App.css';
import Cars from './Cars';

function App() {
  return (
    <ContextProvider>
      <Cars />
    </ContextProvider>
  );
}

export default App;

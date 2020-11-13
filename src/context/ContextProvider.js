import React, { useState } from 'react';
import { carContext } from './Context';

function ContextProvider({ children }) {
  const [red, setRed] = useState(false);
  const [blue, setBlue] = useState(false);
  const [yellow, setYellow] = useState(false);

  const cars = {
    red,
    setRed,
    blue,
    setBlue,
    yellow,
    setYellow,
  };

  return (
    <carContext.Provider value={ cars }>
      { children }
    </carContext.Provider>
  )
}

export default ContextProvider;
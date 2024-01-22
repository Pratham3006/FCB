import React, { useState, useEffect } from 'react';
import './App.css';
import Loader from './Loader';
import Home from './Home';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 6000); 
    return () => clearTimeout(timeout);
  }, []); 

  return (
    <div className="App">
      {isLoading ? <Loader /> : <Home />}
    </div>
  );
}

export default App;

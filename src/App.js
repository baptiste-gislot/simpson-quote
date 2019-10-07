import React from 'react';
import NavBar from './components/navbar';
import QuoteCards from './components/QuoteCards';

function App() {
  return (
    <div className="App">
      <NavBar />
      <QuoteCards image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638" character="Bart Simpson" quote="Nothing you say can upset us. We're the MTV generation."/>  
      <QuoteCards /> 
    </div>
  );
}

export default App;
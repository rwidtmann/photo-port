import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ClickCounter from './components/ClickCounter';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Gallery />
        <ClickCounter />
        <About />
      </main>
    </div>
  );
}

export default App;


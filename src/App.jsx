import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
      <Navbar />
      <Header/>
      <Dashboard/>
      {/* Other components go here */}
    </div>
  );
}

export default App;

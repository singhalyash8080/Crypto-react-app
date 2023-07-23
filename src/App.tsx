import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Content from './components/content/Content';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;

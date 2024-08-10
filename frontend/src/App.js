import React from 'react';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import TranslationTable from './components/TranslationTable';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <VideoPlayer />
      <TranslationTable />
      <Footer />
    </div>
  );
}

export default App;

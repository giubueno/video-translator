import React from 'react';
import LanguagePicker from './LanguagePicker';
import VoicePicker from './VoicePicker';

function Header() {
  return (
    <header className="App-header">
      <h1>Video Translations</h1>
      <div className="controls">
        <LanguagePicker />
        <VoicePicker />
        <button>Generate</button>
      </div>
    </header>
  );
}

export default Header;

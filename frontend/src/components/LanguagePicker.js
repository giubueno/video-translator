import React from 'react';

const LanguagePicker = () => {
  return (
    <div data-testid="language-picker">
      <select data-testid="language-select">
        <option value="en">English</option>
        <option value="es">Spanish</option>
        {/* Add more languages as needed */}
      </select>
    </div>
  );
};

export default LanguagePicker;
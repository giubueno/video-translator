import React from 'react';

function TranslationTable() {
  const data = [
    { timeFrame: "00:01", original: "would like to...", german: "Ich möchte alle...", actions: "Play" },
    { timeFrame: "00:33", original: "And then this...", german: "Und dann diese...", actions: "Play" },
  ];

  return (
    <div className="translation-table">
      <table>
        <thead>
          <tr>
            <th>Time Frame</th>
            <th>Original</th>
            <th>German</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.timeFrame}</td>
              <td>{row.original}</td>
              <td>{row.german}</td>
              <td>
                <button>{row.actions}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TranslationTable;

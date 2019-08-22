import React from 'react';
import './App.css';
import Bar from "./components/app-bar/Bar";
import QrCodeGenerator from "./components/qr-code/QrCodeGenerator";

function App() {
  return (
    <div className="App">
      <Bar />
      <QrCodeGenerator />
    </div>
  );
}

export default App;

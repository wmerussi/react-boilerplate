import React from 'react';
import logo from './assets/images/logo.svg';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" width={30} height={30} src={logo} alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

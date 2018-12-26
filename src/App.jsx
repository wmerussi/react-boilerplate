import React from 'react';
import logo from './assets/images/logo.svg';

import styles from './App.styl';

const App = () => (
  <div>
    <header className={styles.container}>
      <img width={30} height={30} src={logo} alt="logo" />
      <p>
        Edit
        {' '}
        <code>src/App.js</code>
        {' '}
        and save to reload.
      </p>
      <a
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;

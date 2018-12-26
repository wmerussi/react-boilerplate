import React from 'react';
import logo from './assets/images/logo.svg';

import styles from './App.styl';

const componentClass = 'react-boilerplate';

const App = () => (
  <div className={styles[componentClass]}>
    <div className={styles[`${componentClass}__title`]}>
      <img
        className={styles[`${componentClass}__title-image`]}
        src={logo}
        alt=""
      />

      <div className={styles[`${componentClass}__title-wrapper`]}>
        <h1 className={styles[`${componentClass}__title-text`]}>React Boilerplate</h1>

        <a
          className={styles[`${componentClass}__title-link`]}
          href="https://gitlab.com/wmerussi/react-boilerplate"
        >
          GitLab
        </a>
      </div>
    </div>
  </div>
);

export default App;

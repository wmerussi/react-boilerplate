import React from 'react';

import styles from './Home.styl';

import logo from '../../assets/images/logo.svg';

const componentClassName = 'react-boilerplate';

function Home() {
  return (
    <div className={styles[componentClassName]}>
      <div className={styles[`${componentClassName}__title`]}>
        <img
          className={styles[`${componentClassName}__title-image`]}
          src={logo}
          alt=""
        />

        <div className={styles[`${componentClassName}__title-wrapper`]}>
          <h1 className={styles[`${componentClassName}__title-text`]}>React Boilerplate</h1>

          <a
            className={styles[`${componentClassName}__title-link`]}
            href="https://gitlab.com/wmerussi/react-boilerplate"
          >
            GitLab
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;

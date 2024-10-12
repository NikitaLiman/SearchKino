import React from 'react';
import Styles from '../Scss/Texthover.module.scss';
import BlocksHover from './Blocks/BlocksHover';
import Cross from '../img/Clear.svg';

const textHover = () => {
  return (
    <div className={Styles.container}>
      <h1>Most Asked Questions</h1>
      <div className={Styles.content}>
        <BlocksHover img={Cross} />
      </div>
    </div>
  );
};

export default textHover;

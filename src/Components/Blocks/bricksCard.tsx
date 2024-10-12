import React from 'react';
import Styles from '../../Scss/brciks.module.scss';

interface PropsCard {
  title: string;
  img: string;
  text: string;
}

const bricksCard: React.FC<PropsCard> = ({ title, img, text }) => {
  return (
    <div className={Styles.boxCard}>
      <div className={Styles.img}>
        <img src={img} alt="" />
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default bricksCard;

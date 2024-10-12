import React, { FC } from 'react';
import Styles from '../../Scss/Reasons.module.scss';
interface reasonsCards {
  title: string;
  img: string;
  text: string;
}
const ReasonsCards: FC<reasonsCards> = ({ title, img, text }) => {
  return (
    <div className={Styles.boxCard}>
      <div className={Styles.boxCard__content}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div className={Styles.Logo}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default ReasonsCards;

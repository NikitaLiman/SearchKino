import React from 'react';
import Styles from '../Scss/Reasons.module.scss';
import ReasonsCards from './Blocks/ReasonsCards';
import Tv from '../img/Tv.svg';
import WhatchEvery from '../img/WhatchEvery.svg';
import CreateOwn from '../img/CreateOwn.svg';
import Colection from '../img/Colection.svg';

const Reasons = () => {
  const TextList = [
    'Dive into a world of films. Discover new favorites, relive classics, and let every movie take you on a unique journey. Sit back, relax, and enjoy the show!',
    "Enjoy your favorite films anytime, anywhere. Whether you're at home or on the go, immerse yourself in cinema without limits!",
    'Personalize your movie experience! Save your favorites, get recommendations, and track what you’ve watched. Start now and unlock the full potential of our platform!',
    'Build your profile, and we’ll help you discover films you’ll love!',
  ];
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <ReasonsCards title="Enjor your watching" img={Tv} text={TextList[0]} />
        <ReasonsCards title="Watch EveryWhere" img={WhatchEvery} text={TextList[1]} />
        <ReasonsCards title="Create your Profile!" img={CreateOwn} text={TextList[2]} />
        <ReasonsCards title="Get Personalized Recommendations" img={Colection} text={TextList[3]} />
      </div>
    </div>
  );
};

export default Reasons;

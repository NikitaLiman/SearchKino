import React from 'react';
import Styles from '../Scss/brciks.module.scss';
import BricksCard from './Blocks/bricksCard';
import samsung from '../img/samsung_logo_icon_144912.png';
import lg from '../img/lg-1-logo-png-transparent.png';
import appleTV from '../img/1157922.png';
import xiaomi from '../img/xiaomi.svg';
import sony from '../img/brand-sony.svg';
import controller from '../img/fy24_batterycharge.svg';
import Arrow from '../img/arrow_forward_ios_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';
const Bricks = () => {
  return (
    <div className={Styles.container}>
      <h1>
        Watch KinoSearch on TV <img src={Arrow} alt="" />
      </h1>
      <div className={Styles.content}>
        <div className={Styles.box}>
          <BricksCard title="2013 and newer" img={samsung} text="" />
        </div>
        <div className={Styles.box1}>
          <BricksCard title="2014 and newer" img={lg} text="" />
        </div>
        <div className={Styles.box2}>
          <BricksCard title="Apple TV" img={appleTV} text="" />
        </div>
        <div className={Styles.box3}>
          <BricksCard title="" img={xiaomi} text="" />
        </div>
        <div className={Styles.box4}>
          <BricksCard title="" img={sony} text="" />
        </div>
        <div className={Styles.box5}>
          <BricksCard title="Simple TV" img={controller} text="" />
        </div>
      </div>
    </div>
  );
};

export default Bricks;

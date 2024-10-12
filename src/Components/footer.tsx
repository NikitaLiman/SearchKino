import React from 'react';
import Styles from '../Scss/Footer.module.scss';
import twitter from '../img/twitter-brands-solid.svg';
import discord from '../img/discord-brands-solid.svg';
import instagram from '../img/instagram-brands-solid.svg';
import github from '../img/github-brands-solid.svg';
import telegram from '../img/telegram-brands-solid.svg';

const Footer = () => {
  const Icons = [twitter, discord, instagram, github, telegram];
  const Text = [
    '© 2012–2024 Kinosearch. 18+',
    'Federal channels are available for free viewing 24/7.',
    'HBO ® and related service marks are the property of Home Box Office, Inc.',
    'Kinosearch LLC (Tax ID: 7710688352, Registration Number: 1077759854919), address: 115035, California, Sunset Boulevard, 82, building 2, room 9A01.',
    'Contact address for users: support@kinosearch.com.',
    'Kinosearch is the leading online cinema by revenue, according to the TMT research for the first half of 2023.',
  ];
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <div className={Styles.icons}>
          {Icons.map((item, value) => (
            <img key={value} src={item} alt="" />
          ))}
        </div>

        <h1>We're always glad to assist you.</h1>
      </div>
      <div className={Styles.containersecond}>
        <div className={Styles.textStyle}>
          {Text.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <h1>Project Company by KinoSearch</h1>
      </div>
    </div>
  );
};

export default Footer;

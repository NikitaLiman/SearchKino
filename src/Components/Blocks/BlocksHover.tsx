import React, { FC } from 'react';
import Styles from '../../Scss/Texthover.module.scss';
interface BlockHover {
  img: string;
}
const BlocksHover: FC<BlockHover> = ({ img }) => {
  const [isActive, setisActive] = React.useState<number | null>(null);
  const HandleChange = (index: number) => {
    setisActive(isActive === index ? null : index);
  };
  const listQuestions = [
    {
      question: 'What is SearchKino?',
      img,
      text: 'SearchKino is a movie website where you can find a vast collection of films and series. Discover everything from classics to the latest releases, and enjoy streaming your favorites anytime, anywhere!',
    },
    {
      question: 'Where Can i Watch?',
      img,
      text: 'You can watch SearchKino on any device—be it your smartphone, tablet, laptop, or smart TV. Enjoy seamless streaming anytime, anywhere, and never miss a moment of your favorite movies and series!',
    },
    {
      question: 'What i Can Watch?',
      img,
      text: "On SearchKino, you can watch a wide variety of content, including films, TV series, documentaries, and more. Explore genres ranging from action and drama to comedy and horror, ensuring there's something for everyone!",
    },
    {
      question: 'Is SearchKino Good For All?',
      img,
      text: "SearchKino offers something for everyone, catering to all tastes and preferences. Whether you're a fan of blockbusters, indie films, or popular series, there's a diverse selection that is sure to please all viewers!",
    },
  ];
  return (
    <div className={Styles.boxRow}>
      <div className={Styles.boxRow__content}>
        {listQuestions.map((item, index) => (
          <div className={Styles.blockMap}>
            <div onClick={() => HandleChange(index)} key={index} className={Styles.questionItem}>
              <p key={index}>{item.question}</p>
              <img
                className={isActive === index ? Styles.activeImg : Styles.inactiveImg}
                src={item.img}
                alt=""
              />
            </div>
            {isActive === index && (
              <div className={Styles.underBox}>
                <p>{item.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlocksHover;

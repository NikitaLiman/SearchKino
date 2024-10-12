import React from 'react';
import Styles from './BlockInfo.module.scss';
import cross from '../../img/Clear.svg';
import { Link } from 'react-router-dom';
interface MoviesType {
  id: number;
  title: string;
  imgUrl: string;
  year: number;
  imgBG: string;
  genres: string;
  rating: number;
  type: string;
  text: string;
}

interface BlockInfoSliderProps {
  onClose: () => void;
  movie: MoviesType;
}

const BlockInfoSlider: React.FC<BlockInfoSliderProps> = ({ movie, onClose }) => {
  const list = [movie.year, movie.genres, movie.type];
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <img onClick={() => onClose()} className={Styles.cross} src={cross} alt="" />
        <div className={Styles.firstblock}>
          <div className={Styles.textblock}>
            <h1>{movie.title}</h1>
          </div>
          <img src={movie.imgBG} alt="" />
        </div>
        <div className={Styles.secondblock}>
          <div className={Styles.box}>
            <div className={Styles.Block}>
              {list.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <div className={Styles.button}>
              <Link to="/Category">
                <button>Get Started</button>
              </Link>
            </div>
          </div>
          <div className={Styles.text}>
            <p>{movie.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockInfoSlider;

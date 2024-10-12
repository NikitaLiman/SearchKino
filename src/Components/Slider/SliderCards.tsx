import React, { FC } from 'react';
import './Slider.scss';
import Logo from '../../img/Logo.png';

interface PropsType {
  movie: MoviesType;
  onClick: (movie: MoviesType) => void;
}
interface MoviesType {
  id: number;
  title: string;
  imgUrl: string;
  year: number;
  imgBG: string;
  genres: string;
  rating: number;
  text: string;
  type: string;
}

const SliderCards: FC<PropsType> = ({ onClick, movie }) => {
  return (
    <div className="BoxCard" onClick={() => onClick(movie)}>
      <img className="logo" src={Logo} alt="" />
      <div className="imgUrl">
        <img src={movie.imgUrl} alt="" />
      </div>
      <h2>{movie.title}</h2>
      <h3>{movie.id}</h3>
    </div>
  );
};

export default SliderCards;

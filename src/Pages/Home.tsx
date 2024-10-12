import React from 'react';
import Styles from './../Home.module.scss';
import Slider from '../Components/Slider/Slider';
import BlockInfoSlider from '../Components/Slider/BlockInfoSlider';
import Reasons from '../Components/Reasons';
import TextHover from '../Components/textHover';

import Bg from '../../src/img/bg.jpg';
interface MoviesType {
  id: number;
  title: string;
  imgUrl: string;
  imgBG: string;
  year: number;
  genres: string;
  type: string;
  rating: number;
  text: string;
}

const Home: React.FC = () => {
  const [isMovies, setIsMovies] = React.useState<MoviesType[]>([]);
  const [isPopUp, setisPopUp] = React.useState(false);
  const [selectedMovie, setSelectedMovie] = React.useState<MoviesType | null>(null);
  React.useEffect(() => {
    fetch('https://66f7d9feb5d85f31a343cae2.mockapi.io/Movies/Movies')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsMovies(data);
      });
  }, []);
  const HandleMovieClick = (movie: MoviesType) => {
    setSelectedMovie(movie);
    setisPopUp(true);
  };
  const HandleCloseClick = () => {
    setSelectedMovie(null);
    setisPopUp(false);
  };
  return (
    <div className={Styles.container}>
      <div className="bg">
        <img src={Bg} alt="" />
        <h1>
          Limitless movies, shows,
          <br /> and much more.
        </h1>
      </div>
      <Slider movies={isMovies} onMovieClick={HandleMovieClick} />
      {isPopUp && selectedMovie && (
        <BlockInfoSlider movie={selectedMovie} onClose={HandleCloseClick} />
      )}
      <Reasons />
      <TextHover />
    </div>
  );
};

export default Home;

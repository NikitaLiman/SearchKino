import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import './Slider.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import SliderCards from './SliderCards';

interface MoviesType {
  id: number;
  title: string;
  imgUrl: string;
  imgBG: string;
  year: number;
  genres: string;
  rating: number;
  type: string;
  text: string;
}

interface SliderProps {
  movies: MoviesType[];
  onMovieClick: (movie: MoviesType) => void;
}

const Slider: React.FC<SliderProps> = ({ movies, onMovieClick }) => {
  return (
    <div className="container1">
      <h1>Popular Now</h1>
      <div className="ContMov">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={0}
          slidesPerView={5}
          breakpoints={{
            1380: { slidesPerView: 5 },
            1090: { slidesPerView: 4 },
            799: { slidesPerView: 3 },
            563: { slidesPerView: 2 },
            363: { slidesPerView: 1 },
          }}>
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <SliderCards movie={movie} onClick={onMovieClick} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;

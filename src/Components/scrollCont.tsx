import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import '../Scss/ScrollCont.scss';
import MediaScrollCard from './Blocks/mediaScrollCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GetProps } from '../Redux/slices/TrailerSlice';
import SliderSkeleton from './SkeletonSlider';
interface Movie {
  id: number;
  poster_path: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  release_date: number;
  popularity: number;
  original_title: string;
  vote_count: number;
}
interface Genre {
  id: number;
  name: string;
}
interface PropsScroll {
  title: string;
  movies: Movie[];
  ismovie: Movie[];
  trailers: { [key: number]: string };
  isGenre: Genre[];
}
const ScrollCont: React.FC<PropsScroll> = ({ ismovie, trailers, isGenre, title, movies }) => {
  const Dispatch = useDispatch();
  const GiveItems = (movie: Movie) => {
    Dispatch(GetProps({ trailers, selectedMovie: movie, MoviesGenres: isGenre }));
  };
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <div className="containerSC">
      <h1>{title}</h1>
      <div className="mediaScroller">
        <Swiper
          className="sliderscroll"
          modules={[Autoplay, Navigation]}
          navigation={true}
          spaceBetween={20}
          slidesPerView={5}
          autoplay={true}
          breakpoints={{
            1380: { slidesPerView: 5 },
            1090: { slidesPerView: 4 },
            799: { slidesPerView: 3 },
            563: { slidesPerView: 2 },
            363: { slidesPerView: 1 },
          }}
          speed={3000}>
          {isLoading
            ? [...new Array(6)].map((_, index) => (
                <SwiperSlide key={index}>
                  <SliderSkeleton />
                </SwiperSlide>
              ))
            : ismovie.map((item) => (
                <SwiperSlide key={item.id} onClick={() => GiveItems(item)}>
                  <Link to="Trailer">
                    <MediaScrollCard
                      posterPath={item.poster_path}
                      title={item.title}
                      voteEverage={item.vote_average}
                    />
                  </Link>
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ScrollCont;

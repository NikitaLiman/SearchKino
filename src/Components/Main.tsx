import React from 'react';
import Styles from '../Scss/Main.module.scss';
import Heart from '../img/Heart.svg';
import Sort from './sort';
import { useSelector, useDispatch } from 'react-redux';
import { GetProps } from '../Redux/slices/TrailerSlice';
import { Link } from 'react-router-dom';
import Skeleton from './skeleton';
import { SearchContext } from '../App';

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
interface PropsMoviesGenres {
  ismovie: Movie[];
  trailers: { [key: number]: string };
  isGenre: Genre[];
}
const Main: React.FC<PropsMoviesGenres> = ({ ismovie, trailers, isGenre }) => {
  const { SearchValue } = React.useContext(SearchContext);
  const Dispatch = useDispatch();
  const GiveItems = (movie: Movie) => {
    Dispatch(GetProps({ trailers, selectedMovie: movie, MoviesGenres: isGenre }));
  };
  const SearchMovie = ismovie.filter((movie) =>
    movie.title.toLowerCase().includes(SearchValue.toLowerCase()),
  );

  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const SelectedSort = useSelector((state: any) => state.Filter.sort);
  const SortedMovies = [...SearchMovie].sort((a, b) => {
    if (SelectedSort.sort === 'popularity') {
      return b.popularity - a.popularity;
    } else if (SelectedSort.sort === 'vote_average') {
      return b.vote_average - a.vote_average;
    } else if (SelectedSort.sort === 'title') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });
  React.useEffect(() => {
    setIsLoading(false);
  }, [ismovie, trailers, isGenre]);
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <div className={Styles.sort}>
          <Sort />
        </div>
        {isLoading
          ? [...new Array(9)].map((_, index) => <Skeleton key={index} />)
          : SortedMovies.map((poster) => (
              <>
                <Link to="Trailer">
                  <div onClick={() => GiveItems(poster)} className={Styles.card}>
                    <img src={`https://image.tmdb.org/t/p/w500${poster.poster_path}`} alt="" />
                    <div className={Styles.textAyear}>
                      <h1>{poster.title}</h1>
                      <h2>{poster.release_date}</h2>
                    </div>
                    <div className={Styles.HoverBlock}></div>
                  </div>
                </Link>
              </>
            ))}
      </div>
    </div>
  );
};

export default Main;

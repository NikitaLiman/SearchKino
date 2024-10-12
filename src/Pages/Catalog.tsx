import React from 'react';
import SliderCatalog from '../Components/Slider/sliderCatalog';
import Styles from '../Catalog.module.scss';
import Bricks from '../Components/bricks';
import ScrollCont from '../Components/scrollCont';
import Main from '../Components/Main';
import Category from '../Components/category';
import { useSelector, useDispatch } from 'react-redux';
import { filter } from '../Redux/slices/filter';
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
  overview: string;
}
interface Genre {
  id: number;
  name: string;
}
interface Trailer {
  key: string;
  type: string;
}

const Catalog = () => {
  const idGenre = useSelector((State: any) => State.Filter.value);
  const Dispatch = useDispatch();
  const ClickChangeGenre = (id: number) => {
    Dispatch(filter(id));
  };
  const [isMovie, setIsMovie] = React.useState<Movie[]>([]);
  const [isGenre, setIsGenre] = React.useState<Genre[]>([]);
  const [isTrailer, setIsTrailer] = React.useState<{ [key: number]: string }>([]);
  const { SearchValue } = React.useContext(SearchContext);
  const Data = async () => {
    try {
      const SearchMovies = SearchValue
        ? `https://api.themoviedb.org/3/search/movie?api_key=7cffee2a44419c4084d492f3d699669d&query=${SearchValue}`
        : 'https://api.themoviedb.org/3/discover/movie?api_key=7cffee2a44419c4084d492f3d699669d';
      const [MovieRec, GenreRec] = await Promise.all([
        fetch(SearchMovies),
        fetch(
          'https://api.themoviedb.org/3/genre/movie/list?api_key=7cffee2a44419c4084d492f3d699669d',
        ),
      ]);
      const MovieData = await MovieRec.json();
      const GenreData = await GenreRec.json();
      setIsMovie(MovieData.results);
      setIsGenre(GenreData.genres);

      MovieData.results.forEach(async (movie: Movie) => {
        try {
          const TrailerRec = await fetch(
            `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=7cffee2a44419c4084d492f3d699669d&language=en-US`,
          );
          const trailerData = await TrailerRec.json();
          const trailer = trailerData.results.find((video: Trailer) => video.type === 'Trailer');
          if (trailer) {
            setIsTrailer((Prev) => ({
              ...Prev,
              [movie.id]: trailer.key,
            }));
          }
        } catch (error) {
          console.log('Error fetching trailer:', error);
        }
      });
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };
  React.useEffect(() => {
    Data();
  }, [SearchValue]);
  const MoviesFilter =
    idGenre === 0 ? isMovie : isMovie.filter((item) => item.genre_ids.includes(idGenre));

  const MoviesGenres: { [key: string]: Movie[] } = {};

  isMovie.forEach((movie) => {
    movie.genre_ids.forEach((genreID) => {
      const genre = isGenre.find((item) => item.id === genreID);
      if (genre) {
        if (!MoviesGenres[genre.name]) {
          MoviesGenres[genre.name] = [];
        }
        MoviesGenres[genre.name].push(movie);
      }
    });
  });

  const genreKeys = Object.keys(MoviesGenres).slice(0, 1);
  return (
    <div className={Styles.container}>
      <div className={Styles.contentUppercont}>
        <SliderCatalog movies={isMovie} />
      </div>
      <div className={Styles.scrollBox}>
        {genreKeys.map((item) => (
          <ScrollCont
            key={item}
            isGenre={isGenre}
            ismovie={MoviesFilter}
            trailers={isTrailer}
            title="Movies"
            movies={MoviesGenres[item]}
          />
        ))}
      </div>
      <div className={Styles.brick}>
        <Bricks />
      </div>
      <div className={Styles.Main}>
        <Category ClickChangeGenre={ClickChangeGenre} value={idGenre} />
        <Main isGenre={isGenre} ismovie={MoviesFilter} trailers={isTrailer} />
      </div>
    </div>
  );
};

export default Catalog;

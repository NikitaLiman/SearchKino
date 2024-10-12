import React from 'react';
import Styles from '../Scss/BlockTrailer.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import YouTube from 'react-youtube';
import Star from '../img/stars_24dp_ECB576_FILL0_wght400_GRAD0_opsz24.svg';
import Grade from '../img/grade_24dp_5985E1_FILL0_wght400_GRAD0_opsz24.svg';
import Trading from '../img/trending_up_24dp_EA3323_FILL0_wght400_GRAD0_opsz24.svg';
import Ticket from '../img/local_activity_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg';
import PrimeVideo from '../img/Amazon_Prime_Video_logo.svg';
import SkeletonTrailer from './SkeletonTrailer';
import BookMark from '../img/bookmark_24dp_F3F3F3_FILL0_wght400_GRAD0_opsz24.svg';
import { addItem } from '../Redux/slices/FavouriteSlice';
import Return from '../img/arrow_back_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';
import { Link } from 'react-router-dom';
interface Genre {
  id: number;
  name: string;
}
const BlockTrailer = () => {
  const Dispatch = useDispatch();
  const Items = useSelector((state: any) => state.TrailerSlice.selectedMovie);
  const Trailers = useSelector((state: any) => state.TrailerSlice.trailers);
  const Genre = useSelector((state: any) => state.TrailerSlice.MoviesGenres);
  const GenreMovies: Genre[] = Genre?.filter((item: Genre) => Items.genre_ids.includes(item.id));
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [Items, Trailers]);
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  if (!Items) {
    return <div>No movies</div>;
  }
  const AddItemToFav = () => {
    Dispatch(addItem(Items));
  };
  return (
    <div className={Styles.container}>
      <div className={Styles.Content}>
        <div className={Styles.RowCont}>
          <div className={Styles.TextBlock}>
            <h1>{Items.title}</h1>
            <h4>Original title: {Items.original_title}</h4>
            <h4>Year: {Items.release_date}</h4>
          </div>
          <div className={Styles.RateBox}>
            <div className={Styles.Rating}>
              <h1>SearchKino Rate</h1>
              <div className={Styles.boxRate}>
                <img src={Star} alt="" />
                <div className={Styles.VoteBox}>
                  <h2>
                    {Items.vote_average}
                    <span>/10</span>
                  </h2>
                  <h3>{Items.vote_count}K</h3>
                </div>
              </div>
            </div>
            <div className={Styles.YourRating}>
              <div className={Styles.Rating}>
                <h1>Your Rate</h1>
                <div className={Styles.boxRate}>
                  <div className={Styles.Rate}>
                    <img src={Grade} alt="" />
                    <p>Rate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={Styles.popularity}>
              <div className={Styles.Rating}>
                <h1>Popularity</h1>
                <div className={Styles.boxRate}>
                  <img src={Trading} alt="" />
                  <h2>{Items.popularity}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.Trailer}>
          {isLoading ? (
            [...new Array(1)].map((_, index) => <SkeletonTrailer key={index} />)
          ) : (
            <div className={Styles.Load}>
              <div className={Styles.Imgblock}>
                <img src={`https://image.tmdb.org/t/p/w500${Items.poster_path}`} alt="" />
                <div className={Styles.BookMark}>
                  <img onClick={AddItemToFav} src={BookMark} alt="" />
                </div>
              </div>
              <YouTube className={Styles.YoutubeWrapper} opts={opts} videoId={Trailers[Items.id]} />
            </div>
          )}
          <div className={Styles.BLockCont}>
            <div className={Styles.Blocks}>
              <h1>IN THEATERS</h1>
              <img className={Styles.ticket} src={Ticket} alt="" />
            </div>
            <div className={Styles.Blocks}>
              <h1>RENT/BUY</h1>
              <img src={PrimeVideo} alt="" />
            </div>
          </div>
        </div>
        <div className={Styles.TextDescrive}>
          <div className={Styles.contText}>
            <div className={Styles.PosterNone}>
              <div className={Styles.Imgblock}>
                <img src={`https://image.tmdb.org/t/p/w500${Items.poster_path}`} alt="" />
                <div className={Styles.BookMark}>
                  <img onClick={AddItemToFav} src={BookMark} alt="" />
                </div>
              </div>
            </div>
            <div className={Styles.TextGenre}>
              <div className={Styles.GenreId}>
                <ul>
                  {GenreMovies.map((genre: Genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </div>
              <p>{Items.overview}</p>
            </div>
          </div>
          <div className={Styles.ClassNone}>
            <div className={Styles.RateBox}>
              <div className={Styles.Rating}>
                <div className={Styles.boxRate}>
                  <img src={Star} alt="" />
                  <div className={Styles.VoteBox}>
                    <h2>
                      {Items.vote_average}
                      <span>/10</span>
                    </h2>
                    <h3>{Items.vote_count}K</h3>
                  </div>
                </div>
              </div>
              <div className={Styles.YourRating}>
                <div className={Styles.Rating}>
                  <div className={Styles.boxRate}>
                    <div className={Styles.Rate}>
                      <img src={Grade} alt="" />
                      <p>Rate</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={Styles.popularity}>
                <div className={Styles.Rating}>
                  <div className={Styles.boxRate}>
                    <img src={Trading} alt="" />
                    <h2>{Items.popularity}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/Category">
            <div className={Styles.Return}>
              <img src={Return} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlockTrailer;

import React from 'react';
import Styles from '../Fav.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { ClearAll, RemoveItem } from '../Redux/slices/FavouriteSlice';
import BookMark from '../img/bookmark_24dp_F3F3F3_FILL0_wght400_GRAD0_opsz24.svg';
const Favourites = () => {
  const Dispatch = useDispatch();
  const Items = useSelector((State: any) => State.FavouriteSlice.items);
  const Clear = () => {
    Dispatch(ClearAll(Items));
  };
  const Remove = (id: number) => {
    Dispatch(RemoveItem(id));
  };
  return (
    <div className={Styles.container}>
      <h1>Saved</h1>

      <div className={Styles.Content}>
        <div className={Styles.ClearBox}>
          <h2 onClick={Clear}>Clear All</h2>
        </div>
        {Items.map((item: any) => (
          <div className={Styles.container__Box}>
            <div className={Styles.Rate}>
              <h3>{item.vote_average}</h3>
            </div>
            <div onClick={() => Remove(item.id)} className={Styles.BookMark}>
              <img src={BookMark} alt="" />
            </div>
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" />
            <div className={Styles.TextBlock}>
              <h1>{item.title}</h1>
              <h3>{item.release_date}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;

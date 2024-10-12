import React, { useContext } from 'react';
import Heart from '../img/Heart.svg';
import SearchBlock from './Search';
import World from '../img/world.png';
import Styles from '../Scss/Header.module.scss';
import { Link } from 'react-router-dom';
import Home from '../img/home_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';
import Movies from '../img/movie_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';
import Login from '../img/person_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';
import { SearchContext } from '../App';

const Header = () => {
  const [Clickedclass, setClickedClass] = React.useState(false);
  const { user } = useContext(SearchContext);
  const [isActive, SetIsActive] = React.useState(false);
  const handleActive = () => {
    SetIsActive((value: boolean) => !value);
  };
  const ClickBur = () => {
    setClickedClass(!Clickedclass);
  };
  const ClickedPop = () => {
    setClickedClass(false);
  };
  React.useEffect(() => {
    if (Clickedclass) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [Clickedclass]);
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.content}>
          <div className={Styles.logo}>
            <div onClick={handleActive} className={Styles.title}>
              <h1>KinoSearch</h1>
              <div style={{ backgroundImage: `url(${World})` }} className={Styles.globus}>
                <div className={Styles.logoGlobus}></div>
              </div>
              {isActive && (
                <div className={Styles.ClickBlock}>
                  <ul>
                    <Link to="/">
                      <li>
                        Home{' '}
                        <span>
                          <img src={Home} alt="" />
                        </span>
                      </li>
                    </Link>
                    <Link to="Category">
                      <li>
                        Movies
                        <span>
                          <img src={Movies} alt="" />
                        </span>
                      </li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
            <div className={Styles.favXsol}>
              <Link to="/Favourites">
                <div className={Styles.Fav}>
                  <img src={Heart} alt="" />
                  <h2>favorites</h2>
                </div>
              </Link>
            </div>
          </div>
          <div className={Styles.Search}>
            <SearchBlock />
            <Link to="Login">
              <h1>
                <span>
                  <img src={Login} alt="" />
                </span>
                {user ? `Hello, ${user.displayName || user.username}` : 'Sign In'}
              </h1>
            </Link>
            <div className={Styles.containerHam} onClick={ClickBur}>
              <div className={Styles.cotnentHam}>
                <div
                  className={
                    Clickedclass ? Styles.burgerBarClicked : Styles.burgerBarUnClicked
                  }></div>
                <div
                  className={
                    Clickedclass ? Styles.burgerBarClicked : Styles.burgerBarUnClicked
                  }></div>
                <div
                  className={
                    Clickedclass ? Styles.burgerBarClicked : Styles.burgerBarUnClicked
                  }></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Clickedclass ? Styles.menu__visible : Styles.menu__hidden}>
        <div className={Styles.contentMenu}>
          <div onClick={ClickedPop} className={Styles.favXsolHam}>
            <Link to="/Favourites">
              <div className={Styles.FavHam}>
                <img src={Heart} alt="" />
                <h2>favorites</h2>
              </div>
            </Link>
          </div>
          <div onClick={ClickedPop} className={Styles.signInHam}>
            <Link to="Login">
              <h1>
                <span>
                  <img src={Login} alt="" />
                </span>
                {user ? `Hello, ${user.displayName || user.username}` : 'Sign In'}
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

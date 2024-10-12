import React from 'react';
import Styles from '../Scss/Search.module.scss';
import SearchIcon from '../img/search.svg';
import { SearchContext } from '../App';
import Cross from '../img/Clear.svg';
const Search = () => {
  const [Active, setActive] = React.useState(false);
  const { SearchValue, setSearchValue } = React.useContext(SearchContext);
  const HandlePopUpSearch = () => {
    setActive((value: boolean) => !value);
  };
  return (
    <div className={Styles.container}>
      <div className={Styles.container__cont}>
        <img onClick={HandlePopUpSearch} src={SearchIcon} alt="search" />
        <div className={Active ? Styles.active : Styles.inActive}>
          <div className={Styles.contentActive}>
            {SearchValue && (
              <img className={Styles.cross} onClick={() => setSearchValue('')} src={Cross} alt="" />
            )}
            <input
              value={SearchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              type={'text'}
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

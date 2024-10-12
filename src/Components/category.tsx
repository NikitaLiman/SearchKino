import React from 'react';
import Styles from '../Scss/category.module.scss';
import Filter from '../img/tune_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';

interface PropsCategory {
  ClickChangeGenre: (id: number) => void;
  value: number;
}

const Category: React.FC<PropsCategory> = ({ value, ClickChangeGenre }) => {
  const [isClicked, setIsCliked] = React.useState(false);
  const HandlePopUp = () => {
    setIsCliked((value: boolean) => !value);
  };
  const list = [
    { name: 'All Genres', id: 0 },
    { name: 'Action', id: 28 },
    { name: 'Comedy', id: 35 },
    { name: 'Science Fiction', id: 878 },
    { name: 'Animation', id: 16 },
    { name: 'Family', id: 10751 },
    { name: 'Fantasy', id: 14 },
    { name: 'Horror', id: 27 },
    { name: 'Thriller', id: 53 },
    { name: 'Crime', id: 80 },
    { name: 'Adventure', id: 12 },
    { name: 'Drama', id: 18 },
    { name: 'Romance', id: 10749 },
    { name: 'Mystery', id: 9648 },
  ];
  return (
    <div className={Styles.container}>
      <div className={Styles.Filter}>
        <div className={Styles.Filter__cont}>
          <img onClick={HandlePopUp} src={Filter} alt="" />
          <h1>Genre</h1>
        </div>
        {isClicked && (
          <div className={Styles.dropdown}>
            {list.map((item) => (
              <p
                className={value === item.id ? Styles.active : ''}
                onClick={() => ClickChangeGenre(item.id)}
                key={item.id}>
                {item.name}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;

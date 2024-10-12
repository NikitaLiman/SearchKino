import React from 'react';
import Styles from '../Scss/sort.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { sort } from '../Redux/slices/filter';
interface Movie {
  id: number;
  poster_path: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  release_date: number;
}
const Sort = () => {
  const [isActive, setIsActive] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const Dispatch = useDispatch();
  const selectedSort = useSelector((state: any) => state.Filter.sort);

  const SortList = [
    { name: 'Populary', sortProperty: 'popularity' },
    { name: 'Vote', sortProperty: 'vote_average' },
    { name: 'title', sortProperty: 'title' },
  ];
  const HandleChange = () => {
    setIsActive(!isActive);
  };
  const handleSelected = (item: { name: string; sortProperty: string }, index: number) => {
    setIsActive(false);
    setActiveIndex(index);
    Dispatch(sort({ name: item.name, sort: item.sortProperty }));
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.sort}>
        <span onClick={HandleChange}>Sort by:{selectedSort.name}</span>
      </div>
      {isActive && (
        <div className={Styles.List}>
          <ul>
            {SortList.map((item, index) => (
              <li
                key={index}
                className={activeIndex === index ? Styles.active : ''}
                onClick={() => handleSelected(item, index)}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;

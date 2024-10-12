import React from 'react';
import Styles from '../../Components/Slider/sliderCatalog.module.scss';

interface PropsCard {
  genre: string;
  rate: string;
  overwiew: string;
  year: string;
  img: string;
}
const CatalogCardSlider: React.FC<PropsCard> = ({ genre, rate, overwiew, year, img }) => {
  return (
    <div className={Styles.containerSLider}>
      <div className={Styles.UpperPart}>
        <div className={Styles.imgblock}>
          <img src={img} alt="" />
        </div>
        <div className={Styles.BlockText}>
          <div className={Styles.InfoBlock}>
            <span> {genre}</span>
            <span> {year}</span>
            <span>Rating: {rate}</span>
          </div>
          <div className={Styles.lowerPart}>
            <p>{overwiew}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogCardSlider;

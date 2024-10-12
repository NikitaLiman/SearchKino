// import Swiper core and required modules
import { Navigation, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import Styles from './sliderCatalog.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import DxW from '../../img/74512176007-tdw-12353-r.webp';
import DespicableMe from '../../img/Despicable-Me-4-image-1.jpg';
import Subservience from '../../img/S_00908.jpg';
import DxWPoster from '../../img/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg';
import DespicableMePoster from '../../img/wWba3TaojhK7NdycRhoQpsG0FaH.jpg';
import SubserviencePoster from '../../img/gBenxR01Uy0Ev9RTIw6dVBPoyQU.jpg';
import CatalogCardSlider from '../Blocks/CatalogCardSlider';

interface Movie {
  id: number;
  poster_path: string;
}
interface PropsSlider {
  movies: Movie[];
}

const Popcorn: React.FC<PropsSlider> = ({ movies }) => {
  return (
    <div className={Styles.container}>
      <Swiper
        className={Styles.slider}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        loop={true}
        speed={3000}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${DxW})`,
              backgroundPosition: 'center',
            }}
            className={Styles.contentSlider}>
            <div className={Styles.containerTheme}>
              <CatalogCardSlider
                genre="Action/Comedy"
                rate=" 7.672"
                year="2024"
                img={DxWPoster}
                overwiew="A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine."
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${DespicableMe})`,
              backgroundPosition: 'center',
            }}
            className={Styles.contentSlider}>
            <div className={Styles.containerTheme}>
              <CatalogCardSlider
                genre="Animation/Family"
                rate="7.166"
                year="2024"
                img={DespicableMePoster}
                overwiew="Gru and Lucy and their girls—Margo, Edith and Agnes—welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Gru also faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run."
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${Subservience})`,
              backgroundPosition: 'center',
            }}
            className={Styles.contentSlider}>
            <div className={Styles.containerTheme}>
              <CatalogCardSlider
                genre="Action/Comedy"
                rate="6.427"
                year="2024"
                img={SubserviencePoster}
                overwiew="With his wife out sick, a struggling father brings home a lifelike AI, only to have his self-aware new help want everything her new family has to offer... Like the affection of her owner and she'll kill to get it."
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Popcorn;

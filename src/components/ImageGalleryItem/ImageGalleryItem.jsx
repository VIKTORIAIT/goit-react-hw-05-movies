import propTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ imgs, onClick }) => {
  return imgs.map(el => (
    <li className={s.ImageGalleryItem} key={el.id}>
      <img
        className={s.ImageGalleryItemImage}
        src={el.webformatURL}
        alt={el.tags}
        id={el.id}
        onClick={onClick}
      />
    </li>
  ));
};

ImageGalleryItem.propTypes = {
  imgs: propTypes.array,
};

import React from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

export const ImageGallery = ({ imgs, onClick }) => {
  return (
    <ul className={s.ImageGallery}>
      <ImageGalleryItem imgs={imgs} onClick={onClick} />
    </ul>
  );
};

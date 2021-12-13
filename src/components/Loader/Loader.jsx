import React from 'react';
import LoaderSpinner from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <LoaderSpinner
      className={s.LoaderStyle}
      type="ThreeDots"
      color="#00BFFF"
      height={100}
      width={100}
    />
  );
};

export default Loader;

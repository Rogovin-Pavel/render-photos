import React from 'react';
import './photo.scss';

const Photo = ({ photo }) => {
  return (
    <div className="photo">
      <img src={photo.url} alt="" className="photo__img"/>
      <p className="photo__title">{photo.title}</p>
    </div>
  )
};

export default Photo;
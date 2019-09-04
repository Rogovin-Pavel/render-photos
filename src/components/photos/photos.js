import React from 'react';
import './photos.scss';

import Photo from './../photo';

const Photos = ({ photos }) => {
  return (
    <div className="photos">
      {photos.map(photo => <Photo photo={photo} key={photo.id}/>)}
    </div>
  )
};

export default Photos;
import React from 'react';
import { arrayOf, string } from 'prop-types';


function ImagesList({ images }) {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((it) => (
          <div key={it} className="property__image-wrapper">
            <img className="property__image" src={it} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
}

ImagesList.propTypes = {
  images: arrayOf(string),
};

export default ImagesList;

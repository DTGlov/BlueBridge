import React from 'react'

function ImageSection({url}) {
    return (
      <div className="image-section">
        <img
          src={url}
          alt=""
        />
      </div>
    );
}

export default ImageSection

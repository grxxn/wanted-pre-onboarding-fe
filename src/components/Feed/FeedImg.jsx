import React from 'react';

const FeedImg = ({ src, alt, setImgLoading }) => {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        className="feed-content-img"
        onLoad={() => {
          setImgLoading(false);
        }}
      />
    </div>
  );
};

export default FeedImg;

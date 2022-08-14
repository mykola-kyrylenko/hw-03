import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';


export default function ImageGallery({images, onClickImage}) {
  return (
    <ul className="gallery" >
         {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onClick={onClickImage}
        />
      ))}
    </ul>
  )
}

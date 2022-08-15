import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import {ListContainer} from '../imageGalleryApp.styled';

export default function ImageGallery({images, onClickImage}) {
  return (
    <ListContainer>
         {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onClick={onClickImage}
        />
      ))}
    </ListContainer>
  )
}

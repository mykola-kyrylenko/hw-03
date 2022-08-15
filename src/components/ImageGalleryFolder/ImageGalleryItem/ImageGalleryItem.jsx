import React, { Component } from 'react';
// import { Rings } from 'react-loader-spinner';
import {ImageItem, ImageGalleryItemImage} from '../imageGalleryApp.styled';

export default function ImageGalleryItem({ tags, webformatURL, onClick, largeImageURL,}) {


  return (

    <>
      <ImageItem
        onClick={() => onClick({ largeImageURL, tags })}
      >
        <ImageGalleryItemImage src={webformatURL} alt={tags} />
      </ImageItem>
    </>
  );
}




import React, { Component } from 'react';
// import { Rings } from 'react-loader-spinner';


export default function ImageGalleryItem({ tags, webformatURL, onClick, largeImageURL,}) {


  return (

    <>
      <li
        className="ImageGalleryItem"
        onClick={() => onClick({ largeImageURL, tags })}
      >
        <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
      </li>
    </>
  );
}




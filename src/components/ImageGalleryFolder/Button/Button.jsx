import React, { Component } from 'react'
import {ButtonLoadMore} from '../imageGalleryApp.styled';

export default function Button({onClick}) {
  return (
    <ButtonLoadMore onClick={onClick}>
      Load more
    </ButtonLoadMore>
  )
}

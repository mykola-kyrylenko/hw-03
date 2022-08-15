import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import {getImages} from './services/FetchAPI';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import {Container} from './imageGalleryApp.styled';

export default class ImageGalleryApp extends Component {
  state = {
    query: "",
    images: [],
    currentPage: 1,
    maximumPages: 0,
    isLoading: false,
    showModal: false,
    currentImage: {},
  };

  handleSubmit = async (event) =>{
    event.preventDefault();

    try {
      this.setState({
        isLoading: true,
        query: event.target.query.value,
        currentPage: 1,
        isLoading: true,
      });
      const result = await getImages(event.target.query.value, this.state.currentPage);
      const totalImageNumber = await result.total;
      const imageArray = await result.hits;

      this.setState({
        maximumPages: Math.ceil(totalImageNumber/imageArray.length),
        isLoading: false,
        images: imageArray,
      });
  
    } catch (error) {
      console.log(error)
    }

  }



  onHandleClickMore = async ()=>{
    try {
      this.setState((prev) => {
        return {
          currentPage: prev.currentPage + 1,
          isLoading: true,
        };
      });
      const res = await getImages(
        this.state.query,
        this.state.currentPage + 1
      );
      const imagesArr = await res.hits;

      this.setState((prev) => {
        return {
          images: [...prev.images, ...imagesArr],
          isLoading: false,
        };
      });

    } catch (error) {
      console.log(error)
    }

    // window.scrollTo({
    //   bottom: document.documentElement.offsetHeight,
    //   behavior: 'smooth',
    // });
  };


  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleClickImage = (currentImage) => {
    this.setState({
      currentImage,
    });

    this.toggleModal();
  };


  render() {
    console.log(this.state)
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit}/>
        {this.state.isLoading ? <Loader/> : <ImageGallery images={this.state.images} onClickImage={this.handleClickImage}/>}
        {this.state.images.length > 0 && <Button onClick={this.onHandleClickMore}/>}
        {this.state.showModal && (<Modal img={this.state.currentImage} onClose={this.toggleModal}/>)}
      </Container>
    )
  }
}

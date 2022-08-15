import React, { Component } from 'react'
import {SearchBar, SearchForm, SearchFormButton, SearchFormInput} from '../imageGalleryApp.styled';
import {ImSearch} from "react-icons/im";

export default class Searchbar extends Component {
  state = {
    inputValue: '',
  }

  handleInputChange = (event)=>{
    this.setState({inputValue: event.target.value});

  }

  render() {
      return (
      <SearchBar>
        <SearchForm onSubmit={this.props.onSubmit}>
          <SearchFormButton type="submit" >
            <ImSearch></ImSearch>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name='query'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
        </SearchForm>
      </SearchBar>
    )
  }
}

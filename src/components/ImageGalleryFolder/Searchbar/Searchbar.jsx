import React, { Component } from 'react'

export default class Searchbar extends Component {
  state = {
    inputValue: '',
  }

  handleInputChange = (event)=>{
    this.setState({inputValue: event.target.value});

  }

  render() {
      return (
      <header className="searchbar">
        <form className="form" onSubmit={this.props.onSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name='query'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    )
  }
}

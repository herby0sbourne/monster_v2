import { Component } from 'react';

import './searchbox.css';

export default class SearchBox extends Component {
  render() {
    return (
      <input
        type="search"
        placeholder={this.props.placeholder}
        className={`search-box ${this.props.className}`}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

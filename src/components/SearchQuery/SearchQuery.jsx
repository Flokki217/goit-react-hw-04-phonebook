import React, { Component } from 'react';
import css from './SearchStyle.module.css';
export default class SearchQuery extends Component {
  render() {
    return (
      <div>
        <p>Find contacts be name</p>
        <input
          className={css.input}
          type="text"
          value={this.props.value}
          onChange={this.props.filterContacts}
        />
      </div>
    );
  }
}

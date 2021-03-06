import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./searchBar.module.scss";

class SearchBar extends Component {
  render() {
    return (
      <input
        className={styles.searchBar}
        onChange={this.props.setSearchText}
        placeholder="Search Artist..."
        value={this.props.searchText}
        type="text"
      />
    );
  }
}

export default SearchBar;

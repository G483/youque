import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';

class SearchWrap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-wrap">
        <SearchBar/>
      </div>
    );
  }
}

export default SearchWrap;

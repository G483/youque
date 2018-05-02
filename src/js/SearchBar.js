import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    
    axios.get('/api/youtube-search/' + this.state.value)
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row align-items-center">
          <div className="col-sm-6 my-1">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text"><i className="fas fa-search"></i></div>
              </div>
              <input 
                type="text" 
                value={this.state.value} 
                className="form-control" 
                id="search" 
                placeholder="Search..." 
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="col-auto my-1">
            <button type="submit" value="submit" className="d-none"></button>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;

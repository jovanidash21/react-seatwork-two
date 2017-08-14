import React, { Component } from 'react';
import Library from './Library';

class InstantSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState(
      {query: event.target.value}
    );
  };
  render() {
    var { libraries } = this.props;
    var query = this.state.query.trim().toLowerCase();

    if(query.length > 0){

      libraries = libraries.filter(function(library){
        return library.name.toLowerCase().match( query );
      });

    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3" style={{textAlign:"center"}}>
            <h1>
              Instant Search
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3" style={{textAlign:"center"}}>
            <input className="form-control" type="text" placeholder="Search" value={this.state.query} onChange={this.handleChange} required />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3" style={{textAlign:"left"}}>
            <ul style={{margin:"10px"}}>
              {
                libraries.map((library) => {
                  return <Library library={library} />
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default InstantSearch;
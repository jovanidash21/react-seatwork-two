import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.onClickIncrement = this.onClickIncrement.bind(this);
    this.onClickDecrement = this.onClickDecrement.bind(this);
  }
  onClickIncrement(event) {
    event.preventDefault();
    this.setState({
      count: this.state.count + 1
    });
  }
  onClickDecrement(event) {
    event.preventDefault();
    this.setState({
      count: this.state.count - 1
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3" style={{textAlign:"center"}}>
            <h1>
              Counter: {this.state.count}
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3" style={{textAlign:"center"}}>
            <button className="btn btn-primary" onClick={this.onClickIncrement}>
              Up
            </button>
            &nbsp;
            <button className="btn btn-danger" onClick={this.onClickDecrement}>
              Down
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Counter;
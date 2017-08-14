import React, { Component } from 'react';

class Service extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };

    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler (){
    var active = !this.state.active;
    const { totalPrice, service } = this.props;

    this.setState({
      active : active
    });

    totalPrice( active ? service.price : -service.price );
  }

  render() {
    const { service } = this.props;

    return (
      <h4 className={this.state.active ? 'active' : ''} onClick={this.clickHandler}>
        {service.name}:&nbsp;
        <b>
          ${service.price.toFixed(2)}
        </b>
      </h4>
    );
  }
}

export default Service;
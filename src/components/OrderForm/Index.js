import React, { Component } from 'react';
import Service from './Service';

class OrderForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            total: 0
        };

        this.totalPrice = this.totalPrice.bind(this);
    }
    totalPrice(price) {
        this.setState({ total: this.state.total + price });
    }
    render() {
        var { services } = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3" style={{textAlign:"center"}}>
                        <h1>
                            Order Form
                        </h1>
                    </div>
                </div>
                <div className="row service-selector">
                    <div className="col-md-4 col-md-offset-4" style={{textAlign:"left"}}>
                        {
                            services.map((service) => {
                                return <Service service={service} totalPrice={this.totalPrice} />
                            })
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3" style={{textAlign:"center"}}>
                        <h4>
                            Total:&nbsp;
                            <b>
                                ${this.state.total.toFixed(2)}
                            </b>
                        </h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderForm;

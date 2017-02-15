import React from 'react';
import { render } from 'react-dom';
import Counter from './components/Counter/Index';
import InstantSearch from './components/InstantSearch/Index';
import OrderForm from './components/OrderForm/Index';

const libraries = [
    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/' },
    { name: 'AngularJS', url: 'https://angularjs.org/' },
    { name: 'jQuery', url: 'http://jquery.com/' },
    { name: 'Prototype', url: 'http://www.prototypejs.org/' },
    { name: 'React', url: 'http://facebook.github.io/react/' },
    { name: 'Ember', url: 'http://emberjs.com/' },
    { name: 'Knockout.js', url: 'http://knockoutjs.com/' },
    { name: 'Dojo', url: 'http://dojotoolkit.org/' },
    { name: 'Mootools', url: 'http://mootools.net/' },
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/' },
    { name: 'Lodash', url: 'http://lodash.com/' },
    { name: 'Moment', url: 'http://momentjs.com/' },
    { name: 'Express', url: 'http://expressjs.com/' },
    { name: 'Koa', url: 'http://koajs.com/' },
];

const services = [
    { name: 'Web Development', price: 300 },
    { name: 'Design', price: 400 },
    { name: 'Integration', price: 250 },
    { name: 'Training', price: 220 }
];

render(
    <div>
        <Counter />
        <InstantSearch libraries={libraries} />
        <OrderForm services={services} />
    </div>
    , document.getElementById('root'));

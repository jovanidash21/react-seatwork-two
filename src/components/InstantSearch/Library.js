import React, { Component } from 'react';

class Library extends React.Component {
    render() {
        const { library } = this.props;

        return (
            <li style={{listStyle:"none"}}>
                {library.name}
                &nbsp;
                <a href={library.url} target="_blank">
                    {library.url}
                </a>
            </li>
        );
    }
}

export default Library;
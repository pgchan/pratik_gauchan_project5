import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="header">
                {/* <h1 className="header__header">News</h1> */}
                <img className="header__logo" src="../../googlenews.png" alt=""/>
            </header>
        );
    }
}

export default Header;
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="header">
                {/* <h1 className="header__header">News</h1> */}
                <a href="index.html">
                    <img className="header__logo" src="../../googlenews.png" alt="Main logo (google news) that hides in mobile view." />
                </a>
                <a href="index.html">
                    <img className="header__logo__icon" src="../../googlenewsIcon.png" alt="Google News logo that is displayed in mobile view." />
                </a>
            </header>
        );
    }
}

export default Header;
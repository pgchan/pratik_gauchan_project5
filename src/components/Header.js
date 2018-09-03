import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="header">
                {/* <div className="header__navigation__button">
                    <input type="checkbox" id="toggle" className="header__navigation__toggle"/>
                    <label htmlFor="toggle" class="header__navigation__label">
                        <i class="fas fa-bars header__hamburgerMenu"></i>
                    </label>
                </div> */}

                <h1 className="header__header">News</h1>
            </header>
        );
    }
}

export default Header;
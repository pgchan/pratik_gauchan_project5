import React, { Component } from 'react';

class Navigation extends Component {

    render() {
        return (
            <div className="navigation">

                <div className="navigation__hamburger__button">
                    <input type="checkbox" id="toggle" className="navigation__toggle" />
                    <label htmlFor="toggle" className="navigation__label">
                        <i className="fas fa-bars navigation__hamburger__icon"></i>
                    </label>
                
                    <ul className="navigation__list">
                        <button onClick={this.props.selectedButton} className="navigation__buttons" name="general"><i className="fas fa-newspaper"></i>Top stories</button>
                        <button onClick={this.props.selectedButton} className="navigation__buttons" name="business"><i className="far fa-building"></i>Business</button>
                        <button onClick={this.props.selectedButton} className="navigation__buttons" name="technology"><i className="fas fa-laptop"></i>Technology</button>
                        <button onClick={this.props.selectedButton} className="navigation__buttons" name="entertainment"><i className="fas fa-film"></i>Entertainment</button>
                        <button onClick={this.props.selectedButton} className="navigation__buttons" name="sports"><i className="fas fa-swimmer"></i>Sports</button>
                        <button onClick={this.props.selectedButton} className="navigation__buttons" name="science"><i className="fas fa-flask"></i>Science</button>
                        <button onClick={this.props.selectedButton} className="navigation__buttons" name="health"><i className="fas fa-dumbbell"></i>Health</button>
                        <button onClick={this.props.showFavourite} name="favStories" className="navigation__buttons"><i className="far fa-star"></i>Favourites</button>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navigation;
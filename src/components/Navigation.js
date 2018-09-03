import React, { Component } from 'react';

class Navigation extends Component {

    render() {
        return (
            <div className="navigation">
                <button onClick={this.props.selectedButton} className="navigation__buttons" name="general"><i class="fas fa-newspaper"></i>top stories</button>
                <button onClick={this.props.selectedButton} className="navigation__buttons" name="business"><i class="far fa-building"></i>business</button>
                <button onClick={this.props.selectedButton} className="navigation__buttons" name="technology"><i class="fas fa-laptop"></i>technology</button>
                <button onClick={this.props.selectedButton} className="navigation__buttons" name="entertainment"><i class="fas fa-film"></i>entertainment</button>
                <button onClick={this.props.selectedButton} className="navigation__buttons" name="sports"><i class="fas fa-swimmer"></i>sports</button>
                <button onClick={this.props.selectedButton} className="navigation__buttons" name="science"><i class="fas fa-flask"></i>science</button>
                <button onClick={this.props.selectedButton} className="navigation__buttons" name="health"><i class="fas fa-dumbbell"></i>health</button>
                <button name="favStories" className="navigation__buttons"><i class="far fa-star"></i>favourites</button>
            </div>
        )
    }

}

export default Navigation;
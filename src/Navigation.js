import React, { Component } from 'react'

class Navigation extends Component {

    render() {
    
        return (
            <div>
                <button onClick={this.props.selectedButton} name="sports">sports</button>
                <button onClick={this.props.selectedButton} name="business">business</button>
                <button onClick={this.props.selectedButton} name="entertainment">entertainment</button>
                <button onClick={this.props.selectedButton} name="health">health</button>
                <button onClick={this.props.selectedButton} name="science">science</button>
            </div>
        )
    }

}

export default Navigation;


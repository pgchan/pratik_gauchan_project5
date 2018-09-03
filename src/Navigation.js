import React, { Component } from 'react';

class Navigation extends Component {

    render() {
    
        return (
            <div class="navigation">
                <button onClick={this.props.selectedButton} name="general">top stories</button>
                <button onClick={this.props.selectedButton} name="sports">sports</button>
                <button onClick={this.props.selectedButton} name="business">business</button>
                <button onClick={this.props.selectedButton} name="entertainment">entertainment</button>
                <button onClick={this.props.selectedButton} name="health">health</button>
                <button onClick={this.props.selectedButton} name="science">science</button>
                <button onClick={this.props.selectedButton} name="technology">technology</button>

                <button name="favStories">Favourite Stories</button>


            </div>
        )
    }

}

export default Navigation;

/*

when main button is clicked, return empty.









for searchbar. 
if empty, error message.
replace all spaces in string with + for q

https://newsapi.org/v2/everything?q=search+a+topic&from=2018-09-01&sortBy=popularity&apiKey=e8e38588d61245ffaf93b4b90e50523c



for specific news source.



*/
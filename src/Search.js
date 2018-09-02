import React, { Component } from 'react';

class Search extends Component {
    getSearchTerm(e) {
        e.preventDefault();
        this.props.search(this.refs.searched.value)
    }
    render() {
        return (
            <form onSubmit={this.getSearchTerm.bind(this)}>
                <input ref="searched" type="text" placeholder="search"/>
            </form>
        )
    }
}

export default Search;

// https://newsapi.org/v2/everything?q=canada&apiKey=e8e38588d61245ffaf93b4b90e50523c
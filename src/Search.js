import React, { Component } from 'react';

class Search extends Component {
    getSearchTerm = (e) => {
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
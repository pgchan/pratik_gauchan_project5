import React, { Component } from 'react';

class Search extends Component {
    getSearchTerm = (e) => {
        e.preventDefault();
        this.props.search(this.refs.searched.value)
    }
    render() {
        return (
            <form onSubmit={this.getSearchTerm.bind(this)} className="search">
                <div class="search__container">
                    <input ref="searched" type="text" placeholder="search for the latest news" className="search__bar"/>
                    <i class="fas fa-search search__icon"></i>
                </div>
            </form>
        )
    }
}

export default Search;
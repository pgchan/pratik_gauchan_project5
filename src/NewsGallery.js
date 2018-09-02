import React, { Component } from 'react'

class NewsGallery extends Component {

    render() {
        return (
            <div className="news-individual">
                <ul>
                    {this.props.news.map((individual) => {                                 
                        if (individual.urlToImage != null) {
                            return (
                                <li key={individual.publishedAt}>
                                        <img src={individual.urlToImage} alt='Related to the article'/>
                                        <a target="_blank" href={individual.url}>
                                            <h3>{individual.title}</h3>
                                            <p>{individual.source.name}</p>
                                            <p>{individual.description}</p>
                                        </a> 
                                        {/* <form >
                                            <button onSubmit={this.props.favoritesButton}><i className="far fa-star"></i></button>
                                        </form> */}

                                        <button onClick={this.props.favNews}>Save to favourites</button>
                                        
                                    </li>
                            )
                        }  
                        return '';
                    })}
                </ul>
            </div>
        )
    }
}

export default NewsGallery;

/*

if this.favoritesbutton is clicked, do not use a tag, but send it to favorites array.

*/
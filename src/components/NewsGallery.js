import React, { Component } from 'react';

class NewsGallery extends Component {

    render() {
        return (
            <section className="news-individual wrapper">
                <ul>
                    {this.props.news.map((individual) => {                                 
                        if (individual.urlToImage != null) {
                            return (
                                <li key={individual.publishedAt}>
                                    <a target="_blank" href={individual.url}>
                                        <div className="news">
                                            <div className="news__text">
                                                <h3 className="news__text__header">{individual.title}</h3>
                                                <p className="news__text__source">{individual.source.name}</p>
                                                <p className="news__text__description">{individual.description}</p>
                                            </div>

                                            <img src={individual.urlToImage} alt='Picture related to the article' className="news__image"/>

                                        </div>
                                    </a> 
                                    <button onClick={() => this.props.favNews(individual)}><i className="far fa-star"></i></button>
                                        
                                </li>
                            )
                        }  
                        return '';
                    })}
                </ul>
            </section>
        )
    }
}

export default NewsGallery;

/*

if this.favoritesbutton is clicked, do not use a tag, but send it to favorites array.






let favouriteNewsArticles = [];


if (favouriteNewsArticles.includes(passedNewsObject)) {
    favouriteNewsArticles = favouriteNewsArticles.filter(fav => fav != passedNewsObject)
} else {
    favouriteNewsArticles.push(passedNewsObject);
}

*/
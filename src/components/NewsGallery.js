import React, { Component } from 'react';

class NewsGallery extends Component {

    render() {
        return (
            <section className="news__individual wrapper">
                <ul>
                    {this.props.news.map((individual) => {                                 
                        if (individual.urlToImage != null) {
                            return (
                                <li key={individual.publishedAt}>
                                    <a target="_blank" href={individual.url} rel="noopener noreferrer">
                                        <div className="news">
                                            <div className="news__text">
                                                <h3 className="news__text__header">{individual.title}</h3>
                                                <p className="news__text__source">{individual.source.name}</p>
                                                <p className="news__text__description">{individual.description}</p>
                                            
                                                <div className="news__favourites__container">
                                                    Add to favourites: <input id="news__favs" className="news__favourites" type="checkbox" onClick={() => this.props.favNews(individual)} />
                                                    {/* <label htmlFor="news__favs" class="news__label">
                                                <i className="far fa-star news__star"></i>
                                            </label> */}

                                                </div>
                                            </div>
                                            <img src={individual.urlToImage} alt='Picture related to the article' className="news__image"/>
                                        </div>
                                    </a> 
                                    {/* <button onClick={() => this.props.favNews(individual)}></button>    */}
                                    {/* <i className="far fa-star"></i>     */}
                                    
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
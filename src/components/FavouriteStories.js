import React, { Component } from 'react';

const FavouriteStories = (props) => {

    return (
        <div className="news-favourite">
            {/* <ul>
                {props.news.map((individual) => {
                    if (individual.urlToImage != null) {
                        return (
                            <a target="_blank" href={individual.url} key={individual.publishedAt}>
                                <li>
                                    <img src={individual.urlToImage} alt='Related to the article' />
                                    <h3>{individual.title}</h3>
                                    <p>{individual.source.name}</p>
                                    <p>{individual.description}</p>
                                </li>
                            </a>
                        )
                    }
                    return '';
                })}
            </ul> */}
        </div>
    )
}

export default FavouriteStories;
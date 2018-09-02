import React, { Component } from 'react'

const NewsGallery = (props) => {
    return (
        <div className="news-individual">
            {/* <h2>News</h2> */}
            <ul>
                {props.news.map((individual) => {
                    if (individual.urlToImage != null) {
                        return (
                            <a target="_blank" href={individual.url} key={individual.publishedAt}>
                                <li>
                                    <img src={individual.urlToImage} alt='Image related to the article'/>
                                    <h3>{individual.title}</h3>
                                    <p>{individual.source.name}</p>
                                    <p>{individual.description}</p>
                                </li>
                            </a>         
                        )
                    }                    
                })}
            </ul>
        </div>
    )
}

export default NewsGallery;
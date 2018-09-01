import React, { Component } from 'react'

const NewsGallery = (props) => {
    return (
        <div className="news-individual">
            {/* <h2>News</h2> */}
            <ul>
                {props.news.map((individual) => {
                    return (
                        <li>
                            <img src={individual.urlToImage} alt="Image of ${individual.title}"/>
                            <h3>{individual.title}</h3>
                            <p>Description: {individual.description}</p>
                            <p><a target="_blank" href={individual.url} >Read more</a></p>
                        </li>
                    )
                    })
                }
            </ul>
        </div>
    )
}

export default NewsGallery;
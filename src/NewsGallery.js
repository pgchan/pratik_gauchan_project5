import React, { Component } from 'react'

const NewsGallery = (props) => {
    return (
        <div className="news-individual">
            {/* <h2>News</h2> */}
            <ul>
                {props.news.map((individual) => {
                    return (
                        <li>
                            <img src={individual.image} alt=""/>
                            <h3>Title: {individual.title}</h3>
                            <p>Description: {individual.description}</p>
                            <p>Link: <a href="">{individual.url}</a></p>
                        </li>
                    )
                    })
                }
            </ul>
        </div>
    )
}

export default NewsGallery;
import React, { Component } from 'react';
import './styles/styles.css';
import axios from 'axios';
import Header from './Header';
import Navigation from './Navigation'
import Footer from './Footer';
import NewsGallery from './NewsGallery';
import Search from './Search';
import FavouriteStories from './FavouriteStories';

const apiKey = 'e8e38588d61245ffaf93b4b90e50523c'

class App extends Component {
	
	constructor() {
		super();
		this.state = {
			news: [],
			favouriteStories: []
		}

		this.search = this.search.bind(this)
	} 

	search(searchedTerm) {		
		axios.get(`https://newsapi.org/v2/everything?q=${searchedTerm}&apiKey=${apiKey}`)
			.then((response) => {
				console.log(response.data.articles);
				const newsData = response.data.articles;

				this.setState({
					news: newsData,
				})
			})
	}


	favNews = (passedNewsObject) => {
		console.log('fresh grabbed:');
		console.log(passedNewsObject);

		const favouriteNewsArticles = this.state.favouriteStories;
		
		favouriteNewsArticles.push(passedNewsObject);
		console.log('array of objects:');
		console.log(favouriteNewsArticles);
		
		this.setState({
			favouriteStories: favouriteNewsArticles
		})
		
		console.log('Favourites State:');
		console.log(this.state.favouriteStories);
		// console.log(this.state.news);
	
	}



	selectedButton = (e) => {
		console.log(e);		
		let category = e.target.name
		console.log(` ${category} clicked`);
		this.fetchNews(category)
	}

	fetchNews = (category) => {
		axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=${category}&apiKey=${apiKey}`)
		.then((data) => {
			console.log(data.data.articles);
			const newsData = data.data.articles;

			this.setState( {
				news: newsData
			})
		})
	}

	componentDidMount() {
		this.fetchNews(`x`)
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Search search={this.search} />
				<Navigation 
					selectedButton = {this.selectedButton}
					
					 />
				<NewsGallery 
					news={this.state.news}
					favNews={this.favNews}
					 />
				<FavouriteStories />
				<Footer />
			</div>
		);
	}
}

export default App;

/*

there is a button that grabs the entire a tag (via key) and pushes it to a new function in app.js called favorite stories.








*/
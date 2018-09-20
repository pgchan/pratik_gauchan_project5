import React, { Component } from 'react';
import './styles/styles.css';
import axios from 'axios';
import Header from './components/Header';
import Navigation from './components/Navigation'
import Footer from './components/Footer';
import NewsGallery from './components/NewsGallery';
import Search from './components/Search';

const apiKey = 'e8e38588d61245ffaf93b4b90e50523c'

class App extends Component {
	
	constructor() {
		super();
		this.state = {
			news: [],
			favouriteStories: [],
			favouritesPage: false
		}
		this.search = this.search.bind(this)
	}

	search(searchedTerm) {		
		axios.get(`https://newsapi.org/v2/everything?q=${searchedTerm}&apiKey=${apiKey}`)
			.then((response) => {
				const newsData = response.data.articles;

				this.setState({
					news: newsData,
				})
			})
	}

	favNews = (passedNewsObject) => {

		let copiedState = this.state.favouriteStories;

		// let copiedState = Array.from(this.state.favouriteStories);

		if (copiedState.includes(passedNewsObject)) {
			// copiedState = copiedState.filter( newsArticle => newsArticle !== copiedState)

			copiedState = copiedState.filter(newsArticle => newsArticle !== passedNewsObject)

			// copiedState = copiedState.pop(passedNewsObject)
		} else {
			copiedState.push(passedNewsObject)
		}

		if (this.state.favouritesPage == true) {
			this.setState({news: copiedState})
		}

		this.setState({
			favouriteStories: copiedState
			// news:copiedState
		})		
	}

	selectedButton = (e) => {
		let category = e.target.name
		this.fetchNews(category)
		this.setState({favouritesPage: false})
	}

	fetchNews = (category) => {
		axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=${category}&apiKey=${apiKey}`)
		.then((response) => {

			const newsData = response.data.articles;

			this.setState( {
				news: newsData
			})
		})
	}

	showFavourite = (e) => {
		this.setState({
			favouritesPage: true,
			news: this.state.favouriteStories
		})
	}

	componentDidMount() {
		this.fetchNews(`general`)
	}

	// componentDidUpdate() {
	// 	window.scrollTo(0, 0)
	// }

	render() {
		return (
			<div className="App">
				<div className="headerSearch">
					<Header />
					<Search search={this.search} />
				</div>

				<div className="navNewsFavs">
					<Navigation 
						selectedButton = {this.selectedButton} 
						showFavourite = {this.showFavourite}
					/>
					<NewsGallery 
						news={this.state.news}
						favNews={this.favNews}
					/>
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;



/*
if button is clicked again, remove it.


------

if button is clicked, add.


if another button is clicked, remove

*/
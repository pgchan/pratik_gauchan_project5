import React, { Component } from 'react';
import './styles/styles.css';
import axios from 'axios';
import Header from './components/Header';
import Navigation from './components/Navigation'
import Footer from './components/Footer';
import NewsGallery from './components/NewsGallery';
import Search from './components/Search';
import FavouriteStories from './components/FavouriteStories';

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

		
		let favouriteNewsArticles = [];

		if (favouriteNewsArticles.includes(passedNewsObject)) {
			favouriteNewsArticles = favouriteNewsArticles.filter( newsArticle => newsArticle !== favouriteNewsArticles)
		} else {
			favouriteNewsArticles.push(passedNewsObject)
		}
		
		
		console.log(favouriteNewsArticles);
		
		
		// this.state.favouriteStories;
		
		// favouriteNewsArticles.push(passedNewsObject);
		// console.log('array of objects:');
		// console.log(favouriteNewsArticles);
		
		// this.setState({
		// 	favouriteStories: favouriteNewsArticles
		// })
		
		// console.log('Favourites State:');
		// console.log(this.state.favouriteStories);
		// // console.log(this.state.news);
	
	}



	// order.vegetables = [];
	// $(".pizza-vegetables input[type='checkbox']").click(function() {
	// 	const vegetablesValue = $(this).val();
	// 	if (order.vegetables.includes(vegetablesValue)) {
	// 		order.vegetables = order.vegetables.filter(vegetable => vegetable != vegetablesValue);
	// 	} else {
	// 		order.vegetables.push(vegetablesValue);
	// 	}
	// 	addPrice();
	// 	addItems();
	// });





	selectedButton = (e) => {
		console.log(e);		
		let category = e.target.name
		console.log(` ${category} clicked`);
		this.fetchNews(category)
	}

	fetchNews = (category) => {
		axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=${category}&apiKey=${apiKey}`)
		.then((response) => {
			console.log(response.data.articles);
			const newsData = response.data.articles;

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
				<div className="headerSearch">
					<Header />
					<Search search={this.search} />
				</div>

				<div className="navNewsFavs">
					<Navigation selectedButton = {this.selectedButton} />
					<NewsGallery 
						news={this.state.news}
						favNews={this.favNews}
						/>
					<FavouriteStories />
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
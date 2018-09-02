import React, { Component } from 'react';
import './styles/styles.css';
import axios from 'axios';
import Header from './Header';
import Navigation from './Navigation'
import Footer from './Footer';
import NewsGallery from './NewsGallery';
import Search from './Search';

const apiKey = 'e8e38588d61245ffaf93b4b90e50523c'

class App extends Component {
	
	constructor() {
		super();
		this.state = {
			news: []
		}

		this.search = this.search.bind(this)
	} 

	search(searchedTerm) {		
		axios.get(`https://newsapi.org/v2/everything?q=${searchedTerm}&apiKey=${apiKey}`)
			.then((response) => {
				console.log(response.data.articles);
				const newsData = response.data.articles;

				this.setState({
					news: newsData
				})
			})
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
		this.fetchNews(`general`)
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Search search={this.search} />
				<Navigation selectedButton = {this.selectedButton} />
				<NewsGallery news={this.state.news} />
				<Footer />
			</div>
		);
	}
}

export default App;

/*


*/
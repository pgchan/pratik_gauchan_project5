import React, { Component } from 'react';
import './styles/styles.css';
import axios from 'axios';
import Header from './Header';
import Navigation from './Navigation'
import Footer from './Footer';
import NewsGallery from './NewsGallery'

const apiKey = 'e8e38588d61245ffaf93b4b90e50523c'

class App extends Component {
	
	constructor() {
		super();
		this.state = {
			news: []
		}
	} 
	
	selectedButton = (e) => {
		let clickedButton = e.target.name
		console.log(` ${clickedButton} clicked`);

		this.fetchNews(clickedButton)
	}

	fetchNews(clickedButton) {
		let buttonData = `${clickedButton}`
		// console.log(buttonData);

		axios.get(`https://newsapi.org/v2/top-headlines?country=ca&category=${buttonData}&apiKey=${apiKey}`)
		.then((data) => {
			console.log(data.data.articles);
			const newsData = data.data.articles;

			this.setState( {
				news: newsData
			})
		})
	}


	componentDidMount() {
		axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
			.then((data) => {
				console.log(data.data.articles);
				const newsData = data.data.articles;

				this.setState({
					news: newsData
				})
			})
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Navigation selectedButton = {this.selectedButton} />
				<NewsGallery news={this.state.news} />
				<Footer />
			</div>
		);
	}
}

export default App;

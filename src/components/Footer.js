import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <h3 className="footer__text">&copy; Pratik Gauchan 2018. Powered by <span><a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">News API</a></span></h3>
            </footer>
        );
    }
}

export default Footer;
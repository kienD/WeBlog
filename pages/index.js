import React from 'react';
import Head from './Head';
import Nav from './Nav';
import css from 'next/css';
import * as utils from '../static/utils.js';

var dummyArticles = [
	{
		title: "DUmmy Title",
		description: "Dummy description",
		content: 'Sweet donut marshmallow danish snaps cotton candy. croissant dessert tiramisu lemon drops brownie cake toffee sesame snaps macaroon gingerbread. topping danish jelly beans brownie.',
	},
	{
		title: 'Another title',
		description: 'Random description',
		content: 'hah'
	}
];

export default class extends React.Component {
	static getInitialProps(articles) {
	    return {
	    	articles: dummyArticles
	    };
	  }
	render(articles) {
		return (
			<div>
				<Head />

				<div className="container">
					<header>
						<h1>WeBlog</h1>
					</header>

					<Nav />
				</div>

				<div {...css(articleList, utils.standardPadding)}>

					<div className="container">
						{this.props.articles.map(function(article) {
							return (
								<article className={articleCard}>
									<h5>{article.title}</h5>
									<p>{article.description}</p>
									<a href="/post" className={utils.smallFont}>Read More</a>
								</article>
							)
						})}
					</div>
				</div>
			</div>
		)
	}
}

const articleList = css({
  background: '#FAFAFA'
});

const articleCard = css({
  background: '#FFF',
  boxShadow: '0 1px 4px rgba(0,0,0,.04)',
  margin: '1em 0',
  padding: '1em'
});
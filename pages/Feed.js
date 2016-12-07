import React from 'react';
import Head from './Head';
import Nav from './Nav';
import css from 'next/css';
import * as utils from '../static/utils.js';

const articleList = css({
  background: '#FAFAFA'
});

const articleCard = css({
  background: '#FFF',
  boxShadow: '0 1px 4px rgba(0,0,0,.04)',
  margin: '1em 0',
  padding: '1em'
});

class Feed extends React.Component {
	constructor(props) {
		super(props);

		this._getPosts = this._getPosts.bind(this);

		this.state = {
			_articles: []
		};
	}

	componentDidMount() {
		this.setState(
			{
				_articles: this._getPosts()
			}
		);
	}

	_getPosts() {
		var instance = this;

		var data = WeDeploy.data('http://data.weblog-test.wedeploy.io');

		data.get('posts')
			.then(function(posts) {
				instance.setState(
					{
						_articles: posts
					}
				);

			}
		);
	}

	render() {
		return (
			<div {...css(articleList, utils.standardPadding)}>
				<div className="container">
					{this.state._articles.map(function(article) {
						return (
							<article className={articleCard} key="article.id">
								<h5>{article.title}</h5>
								<p dangerouslySetInnerHTML={article.contentHTML}></p>
								<a href="/post" className={utils.smallFont}>Read More</a>
							</article>
						)
					})}
				</div>
			</div>
		);
	}
}

export default Feed;
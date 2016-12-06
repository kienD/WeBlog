import React from 'react';
import Head from './Head';
import Nav from './Nav';
import css from 'next/css';
import * as utils from '../static/utils.js';

export default class extends React.Component {
	render() {
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
						<article {...css(articleCard, utils.standardPadding)}>
							<h5>Sample Blog Title</h5>
							<p className={utils.noMargin}>Cotton candy soufflé chupa chups wafer jelly beans jelly-o bonbon sweet caramels jelly-o licorice jelly beans. powder marzipan macaroon tiramisu sugar plum.</p>
							<a href="/post" className={utils.smallFont}>Read More</a>
						</article>

						<article {...css(articleCard, utils.standardPadding)}>
							<h5>Sample Blog Title</h5>
							<p className={utils.noMargin}>Cotton candy soufflé chupa chups wafer jelly beans jelly-o bonbon sweet caramels jelly-o licorice jelly beans. powder marzipan macaroon tiramisu sugar plum.</p>
							<a href="/post" className={utils.smallFont}>Read More</a>
						</article>

						<article {...css(articleCard, utils.standardPadding)}>
							<h5>Sample Blog Title</h5>
							<p className={utils.noMargin}>Cotton candy soufflé chupa chups wafer jelly beans jelly-o bonbon sweet caramels jelly-o licorice jelly beans. powder marzipan macaroon tiramisu sugar plum.</p>
							<a href="/post" className={utils.smallFont}>Read More</a>
						</article>
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
  margin: '1em 0'
});
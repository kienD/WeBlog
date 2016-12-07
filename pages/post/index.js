import React from 'react';
import Head from '../Head';
import Nav from '../Nav';
import css from 'next/css';
import * as utils from '../../static/utils.js';


export default class extends React.Component {
	static getInitialProps() {
		return {
			title: 'generic post title',
			author: 'author of post',
			writtenDate: '12/6/2016',
			content: 'Powder jelly beans wafer toffee gummi bears lollipop cotton candy cupcake. sugar gummies ice cream caramels chocolate bar cake jelly-o cake.'
		};
	}

	render() {
		return (
			<div>
				<Head />

				<Nav />

				<header {...css(postHeader, utils.blockContainer, utils.alignCenter, utils.justifyCenter)}>
					<div className="container" {...css(utils.textCenter)}>
						<h1>{this.props.title}</h1>
						<p>{this.props.author}</p>
						<p>{this.props.writtenDate}</p>
					</div>
				</header>

				<div className="container">
					<div className={utils.largePadding}>
						{this.props.content}
					</div>

				</div>

			</div>
		)
	}
}

const postHeader = css({
	background: 'rgba(0, 0, 0, 0.9)',
	color: '#FFF',
	height: '70vh'
})
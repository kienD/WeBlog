import React from 'react';
import css from 'next/css';
import Nav from './Nav';
import * as utils from '../static/utils.js';

export default class extends React.Component {
	render() {
		return (
			<header className={utils.largePadding}>

			{this.props.title ? (
			  <h1 {...css()} className={title}>{this.props.title}</h1>
			) : null}

			<Nav />
			</header>
		);
	}
}

const title = css({
  fontSize: '2.5rem'
})
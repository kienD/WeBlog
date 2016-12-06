import React from 'react';
import css from 'next/css';
import * as utils from '../static/utils.js';

export default class extends React.Component {
	render() {
		return (
			<nav {...css(utils.blockContainer, utils.noPadding)}>
				<a className={utils.standardPadding} href="/">Home</a>
				<a className={utils.standardPadding} href="/create">Create New Blog</a>
			</nav>
		);
	}
}

const style = css({
  display: 'flex'
})
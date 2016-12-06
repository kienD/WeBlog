import React from 'react';
import css from 'next/css';
import Link from 'next/link'
import * as utils from '../static/utils.js';

export default class extends React.Component {
	render() {
		return (
			<nav {...css()}>
				<span><Link href="/">Home</Link></span>
				<span className={utils.standardPadding}><Link href="/create">Create New Blog</Link></span>
			</nav>
		);
	}
}
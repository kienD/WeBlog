import React from 'react';
import Head from './Head';
import Nav from './Nav';

export default class extends React.Component {
	render() {
		return (
			<div>
				<Head />
				<Nav />

				<h1>Blog Home</h1>
			</div>
		)
	}
}
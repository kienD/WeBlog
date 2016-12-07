import React from 'react';
import Head from './Head';
import Nav from './Nav';
import Feed from './Feed';

export default class extends React.Component {
	render() {
		return (
			<div>
				<Head />
				<Header title="WeBlog" />

				<Feed />
			</div>
		)
	}
}
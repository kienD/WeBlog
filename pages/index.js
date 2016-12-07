import React from 'react';
import Head from './Header';
import Nav from './Nav';
import Feed from './Feed';

export default class extends React.Component {
	render() {
		return (
			<div>
				<Header title="WeBlog" />

				<Feed />
			</div>
		)
	}
}
import React from 'react'

import Editor from './Editor';
import Head from '../Head';
import Nav from '../Nav';

export default class extends React.Component {
	render() {
		return (
			<div>
				<Head />
				<Nav />

				<h1>Create new post!</h1>

				<Editor />
			</div>
		);
	}
}
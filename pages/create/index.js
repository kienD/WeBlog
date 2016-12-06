import React from 'react'

import Editor from './Editor';
import Nav from '../Nav';

export default class extends React.Component {
	render() {
		return (
			<div>
				<Nav />

				<h1>Create new post!</h1>

				<Editor />
			</div>
		);
	}
}
import React from 'react'

import style from 'next/css'

import Nav from '../Nav';
import Post from '../Post';

export default class extends React.Component {
	render() {
		return (
			<div>
				<Nav />

				<Post
					author="author"
					date="test-date"
					title="test"
				/>
			</div>
		)
	}
}
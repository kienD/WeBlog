import React from 'react'

import * as utils from '../../static/utils.js';
import css from 'next/css'
import Editor from './Editor';
import Head from '../Head';
import Header from '../Header';

export default class extends React.Component {
	constructor(props) {
		super(props);

		this._handleSubmit = this._handleSubmit.bind(this);
	}
	_handleSubmit(event) {
		event.preventDefault();

		var data = WeDeploy.data('http://data.weblog-test.wedeploy.io');

		data.create(
			'posts',
			{
				"title": this.refs.title.value,
				"contentMarkdown": this.refs.editor.state._value,
				"contentHTML": this.refs.editor.state._preview
			}
		).then(function(post) {
			console.log(post);
		});
	}

	render() {
		return (
			<div>
				<Head />

				<Header title="Create new Post" />

				<form onSubmit={this._handleSubmit}>
					<input label="title" type="text" ref="title"/>

					<Editor ref="editor" />

					<button className="button-submit" type="submit">Create Post</button>
				</form>
			</div>
		);
	}
}
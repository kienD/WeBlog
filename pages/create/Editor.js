import {markdown} from 'markdown';
import React from 'react'

class Editor extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			preview: '',
			value: ''
		};

		this._handleChange = this._handleChange.bind(this);
	}

	_createMarkup() {
		return {__html: this.state.preview};
	}

	_handleChange(event) {
		console.log(event);

		const {value} = event.target;

		this.setState(
			{
				preview: markdown.toHTML(value),
				value: value
			}
		);
	}

	render() {
		return (
			<div className="editor">
				<div className="edit">
					<textarea value={this.state._value} onChange={this._handleChange} />
				</div>

				<div className="preview" dangerouslySetInnerHTML={this._createMarkup()}></div>
			</div>
		);
	}
}

export default Editor;
import {markdown} from 'markdown';
import React from 'react'
import css from 'next/css'

const styleContainer = css(
	{
		display: 'flex'
	}
);

const styleChild = css(
	{
		flexBasis: '50%',
		padding: '20px'
	}
);

const styleHeader = css(
	{
		borderBottom: '1px solid #777'
	}
);

const styleSeparatorAfter = css(
	{
		borderRight: '1px solid #777'
	}
);

const styleTextarea = css(
	{
		borderWidth: 0,
		boxSizing: 'border-box',
		height: '100%',
		resize: 'none',
		width: '100%',
		':focus': {
			outline: 'none'
		}
	}
);

class Editor extends React.Component {
	constructor(props) {
		super(props);

		console.log('markdown:', markdown);

		this._markdown = markdown;

		this._getHTML = this._getHTML.bind(this);
		this._handleChange = this._handleChange.bind(this);

		const value = '### Add Your Blog Content Here';

		this.state = {
			_preview: this._getHTML(value),
			_value: value
		};
	}

	_createMarkup() {
		return {__html: this.state._preview};
	}

	_getHTML(markdown) {
		return this._markdown.toHTML(markdown);
	}

	_handleChange(event) {
		const {value} = event.target;

		this._setValue(value);
	}

	_setValue(value) {
		this.setState(
			{
				_preview: this._getHTML(value),
				_value: value
			}
		);
	}

	render() {
		return (
			<div>
				<div {...css(styleContainer, styleHeader)}>
					<div {...styleChild}>
						<h2>Markdown</h2>
					</div>

					<div {...styleChild}>
						<h2>Preview</h2>
					</div>
				</div>
				<div className={styleContainer}>
					<div {...css(styleChild, styleSeparatorAfter)}>
						<textarea className={styleTextarea} value={this.state._value} onChange={this._handleChange} />
					</div>

					<div {...styleChild}>
						<div dangerouslySetInnerHTML={this._createMarkup()}></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Editor;
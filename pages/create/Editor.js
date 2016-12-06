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

	_handleChange(event) {
		console.log(event);
	}

	render() {
		return (
			<div className="editor">
				<div className="edit">
					<textarea value={this.state._value} onChange={this._handleChange} />
				</div>

				<div className="preview">
					{this.state.preview}
				</div>
			</div>
		);
	}
}

export default Editor;
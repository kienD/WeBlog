import React from 'react'
import css from 'next/css'

class Post extends React.Component {
	render() {
		return (
			<div className="post-container">
				<h1 className="post-title">{this.props.title}</h1>

				<span className="post-date">{this.props.date}</span>

				<span className="post-author">{this.props.author}</span>

				<div className="post-content">{this.props.content}</div>
			</div>
		);
	}
}

export default Post;
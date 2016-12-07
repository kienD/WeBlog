import React from 'react';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this._showModal = this._showModal.bind(this);
	}

	_showModal() {
		const auth = WeDeploy.auth();

		var provider = new auth.provider.Github();
		provider.setProviderScope("user:email");

		auth.signInWithRedirect(provider);

		auth.onSignIn(function(user) {
			console.log('signed in!');
		    // Fires when user is signed in after redirect.
		});
	}

	render() {

		return (
			<div>
				<button onClick={this._showModal}>press me</button>
			</div>
		);
	}
}

export default SignIn;
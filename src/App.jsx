import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		}
	}

	render() {
		return (
			<div>
				<button onClick={() => { this.setState({ counter: this.state.counter + 2 }) }} >add</button>
				{this.state.counter}
			</div>
		)
	}
}

export default App;
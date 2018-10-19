import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			name: 'app',
		};
	}
	render() {
		return <div>this is {this.state.name}</div>;
	}
}

export default App;

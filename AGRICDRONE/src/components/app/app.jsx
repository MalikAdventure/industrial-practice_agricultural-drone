import { Component } from 'react';

import Header from '../header/header.jsx';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);

	}
	render() {
		return (
			<div className='app'>
				<Header />
			</div>
		);
	}
}

export default App;

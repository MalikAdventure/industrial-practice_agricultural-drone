import { Component } from 'react';

import Header from '../header/header.jsx';
import Navigation from '../navigation/navigation.jsx';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);

	}
	render() {
		return (
			<div className='app'>
				<Header />
				<Navigation />
			</div>
		);
	}
}

export default App;

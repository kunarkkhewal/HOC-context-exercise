import React, { Component } from 'react';
import './App.css';
import AuthenticationProvider from './AuthenticationProvider';
import ChildComponent from './ChildComponent'

class App extends Component {
	render() {
		return (
			<AuthenticationProvider>
				<div>
					<h2>Parent Component sending isAuthenticated props thru context</h2>
					<br/>
					<ChildComponent/>
				</div>
			</AuthenticationProvider>
		);
	}
}

export default App;

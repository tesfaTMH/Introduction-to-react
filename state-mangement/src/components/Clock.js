import React from 'react';

class Clock extends React.Component {
	constructor(props) {
		super(props);

		// intializes state with current date and time 
		this.state = {
			date: new Date()
		}

		setInterval( () => this.setTime(), 1000);
	}

	// a method to update the time
	setTime() {
		console.log(this.state.date);
		this.setState((state, props) => (
		{
			date: new Date()
		}
		))
	}

	render () {
		return (
			<div>
				<p> The current time is {this.state.date.toString()}</p>  
			</div>
		);
	}
}

export default Clock;
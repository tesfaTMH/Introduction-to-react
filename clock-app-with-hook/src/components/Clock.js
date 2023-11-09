import React, { useState, useEffect } from 'react';

// clock component 
function Clock(props) {
	// state hooks
	const [currentDateTime, setCurrentDateTime] = useState (new Date());
	

	useEffect(() => {
		let setTime = () => {
			console.log("setTime is called");
			setCurrentDateTime(new Date());
		}
		let interval = setInterval(setTime, 1000);
	
		return () => {
			clearInterval(interval);
		}
	}, []);

	return (
		<div>
			<h1> Clock App. with hook </h1>
			<p> The current time is: {currentDateTime.toString()}</p>  
		</div>
	);
}

export default Clock;
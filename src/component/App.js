import React, { useState } from 'react';

// function App() {
// 	const [count, setCount] = useState(0);

// 	function increase() {
// 		setCount(count + 1);
// 	}

// 	function decrease() {
// 		setCount(count - 1);
// 	}

// 	return (
// 		<div className='container'>
// 			<h1>{count}</h1>
// 			<button onClick={increase}>+</button>
// 			<button onClick={decrease}>-</button>
// 		</div>
// 	);
// }

////////////////

function App() {
	// Calculator

	const [count, setCount] = useState(0);

	function increase() {
		setCount(count + 1);
	}

	function decrease() {
		setCount(count - 1);
	}

	////////// Time interval

	setInterval(updateTime, 1000);

	const now = new Date().toLocaleTimeString();

	const [time, setTime] = useState(now);

	function updateTime() {
		const newTime = new Date().toLocaleTimeString();
		setTime(newTime);
	}

	return (
		<div className='container'>
			<h1>{time}</h1>
			{/* <button onClick={updateTime}>Get Time</button> */}

			{/* counter div */}
			<div className='container'>
				<h1>{count}</h1>
				<button onClick={increase}>+</button>
				<button onClick={decrease}>-</button>
			</div>
		</div>
	);
}

export default App;

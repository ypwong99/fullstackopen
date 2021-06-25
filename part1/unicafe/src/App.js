import React, { useState } from 'react'

const Button = (props) => {
	return(
		<button onClick={props.handleClick}>
			{props.text}
		</button>
	)
}

const Statistic = ({text, value}) => {
	return(
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	)
}

const Statistics = ({good, neutral, bad}) => {
	let all = good + neutral + bad
	let average = (good - bad) / all
	let positive = good / all * 100

	if (all === 0) {
		return <p>No feedback given</p>
	}

	return(
		<table>
			<Statistic text="good" value={good} />
			<Statistic text="neutral" value={neutral} />
			<Statistic text="bad" value={bad} />
			<Statistic text="all" value={all} />
			<Statistic text="average" value={average} />
			<Statistic text="positive" value={positive + " %"} />
		</table>
	)
}

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	return (
		<div>
			<h1>give feedback</h1>
			<Button handleClick={() => setGood(good + 1)} text="good" />
			<Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
			<Button handleClick={() => setBad(bad + 1)} text="bad" />
			<h1>statistics</h1>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	)
}

export default App
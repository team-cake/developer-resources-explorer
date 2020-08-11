import React from 'react'
import './App.css'
import { useSelector } from 'react-redux'

const selectDevelopers = (reduxState) => {
	return reduxState.developers
}

const selectResources = (reduxState) => {
	return reduxState.resources
}

function App() {
	const developers = useSelector(selectDevelopers)
	const resources = useSelector(selectResources)

	return (
		<div className='App'>
			<h1>Web development resources</h1>
			<br />
			<h2>{developers.length}</h2> Developers
			<h2>{resources.length}</h2> Resources
		</div>
	)
}

export default App

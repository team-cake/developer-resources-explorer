import React, { useState } from 'react'
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
	const [favId, setFavId] = useState(1)

	const developersFav = useSelector((state) => {
		return state.developers.filter((dev) => dev.favorites.includes(favId))
	})
	return (
		<div className='App'>
			<h1>Web development resources</h1>
			<br />
			<h2>{developers.length}</h2> Developers
			<h2>{resources.length}</h2> Resources
			<br />
			<br />
			<h2>
				Who likes{' '}
				<select
					value={favId}
					onChange={(e) => setFavId(parseInt(e.target.value))}
				>
					{resources.map((resource) => {
						return (
							<option key={resource.id} value={resource.id}>
								{resource.name}
							</option>
						)
					})}
				</select>
				?
			</h2>
			<ul>
				{developersFav.map((dev) => {
					return <li key={dev.id}>{dev.name}</li>
				})}
			</ul>
		</div>
	)
}

export default App

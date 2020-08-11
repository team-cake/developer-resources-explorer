import React, { useState } from 'react'
import './App.css'
import {
	selectDevelopersWithFavorite,
	devFavResources,
} from './store/developers/selectors'
import { useSelector } from 'react-redux'

const selectDevelopers = (reduxState) => {
	return reduxState.developers
}

const selectResources = (reduxState) => {
	return reduxState.resources
}

export default function App() {
	const developers = useSelector(selectDevelopers)
	const resources = useSelector(selectResources)
	const [favoriteId, setFavoriteId] = useState(1)
	const [developerId, setDeveloperId] = useState(1)

	const developersWithThisFavorite = useSelector(
		selectDevelopersWithFavorite(favoriteId)
	)
	const favResources = useSelector(devFavResources(developerId))

	return (
		<div className='App'>
			<h1>Web development resources</h1>
			<br />
			<h2>{developers.length}</h2> Developers
			<h2>{resources.length}</h2> Resources
			<br />
			<br />
			<div>
				<h2>
					Who likes{' '}
					<select
						value={favoriteId}
						onChange={(e) => setFavoriteId(parseInt(e.target.value))}
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
					{developersWithThisFavorite.map((dev) => {
						return <li key={dev.id}>{dev.name}</li>
					})}
				</ul>
			</div>{' '}
			<br />
			<div>
				<h2>
					What are{' '}
					<select
						value={developerId}
						onChange={(e) => setDeveloperId(parseInt(e.target.value))}
					>
						{developers.map((developer) => {
							return (
								<option key={developer.id} value={developer.id}>
									{developer.name}
								</option>
							)
						})}
					</select>
					's favorites?
				</h2>
				<ul>
					{favResources.map((resource) => {
						return <li key={resource.id}>{resource.name}</li>
					})}
				</ul>
			</div>
		</div>
	)
}

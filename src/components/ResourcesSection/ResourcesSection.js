import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectResources } from '../../store/resources/selectors'
import { selectLoggedinUser } from '../../store/selectors'
import { toggleFavorite } from '../../store/developers/actions'

import './ResourcesSection.css'

export default function ResourcesSection() {
	const dispatch = useDispatch()
	const me = useSelector(selectLoggedinUser)
	const resources = useSelector(selectResources)
	return (
		<div className='ResourcesSection'>
			<h2>Resources</h2>
			<div className='Resources'>
				{resources.map((resource) => {
					const toggle = () => {
						dispatch(toggleFavorite(me.id, resource.id))
					}
					return (
						<div className='resource' key={resource.id}>
							<div className='title'>
								<button onClick={toggle}>
									{me.favorites.includes(resource.id) ? '♥' : '♡'}
								</button>{' '}
								<strong>{resource.name}</strong> (<em>{resource.type}</em>)
								&mdash; Find out more <a href={resource.url}>here</a>.
							</div>
							<div className='meta'>
								{resource.tags.map((tag, i) => {
									return (
										<span key={i} className='tag'>
											{tag}
										</span>
									)
								})}
							</div>
							<br />
						</div>
					)
				})}
			</div>
		</div>
	)
}

import React from 'react'
import { useSelector } from 'react-redux'
import { selectResources } from '../../store/resources/selectors'

import './ResourcesSection.css'

export default function ResourcesSection() {
	const resources = useSelector(selectResources)
	return (
		<div className='ResourcesSection'>
			<h2>Resources</h2>
			<div className='Resources'>
				{resources.map((resource) => {
					return (
						<div className='resource' key={resource.id}>
							<div className='title'>
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

import React from 'react'
import { useSelector } from 'react-redux'
import { selectResources } from '../store/resources/selectors'

export default function ResourcesSection() {
	const resources = useSelector(selectResources)
	return (
		<div className='ResourcesSection'>
			<h2>Resources</h2>
			<div className='Resources'>
				{resources.map((resource) => {
					return (
						<div className='resource' key={resource.id}>
							<div classname='title'>
								<strong>{resource.name}</strong>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

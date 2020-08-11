export const devFavResources = (developerId) => (state) => {
	const developer = state.developers.find((dev) => dev.id === developerId)
	if (!developer) {
		return []
	}
	return state.resources.filter((resource) => {
		return developer.favorites.includes(resource.id)
	})
}

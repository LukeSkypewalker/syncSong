SongsIndex = new EasySearch.Index({
	collection: Songs,
	fields: ['songName'],
	engine: new EasySearch.MongoDB(),
	defaultSearchOptions: {
		limit: 3
	},
});
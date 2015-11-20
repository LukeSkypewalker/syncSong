Meteor.startup (function() {
	if (Rooms.find().count() === 0) {
		Rooms.insert({
			name: 'Scoltech',
			url: 'scoltech',
			artist: 'Ария',
			songName: 'Засыпай'
		});
		Rooms.insert({
			name: 'HSE',
			url: 'hse',
			artist: 'Ария',
			songName: 'Засыпай'
		});
		Rooms.insert({
			name: 'MSU',
			url: 'msu',
			artist: 'Ария',
			songName: 'Засыпай'
		});
		Rooms.insert({
			name: 'Школа музыки Guitardo',
			url: 'guitardo',
			artist: 'Ария',
			songName: 'Засыпай'
		});
	};
});
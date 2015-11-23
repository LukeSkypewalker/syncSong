// room
Template.room.helpers({
	songList: function() {
		//TODO: Sort List ( I've tried, but i didn't successed)
		// return Songs.find({songName: {$exists: true}}, {artist: 1, songName: 1, _id: 1}, {sort: {artist: 1}} );
		// return Songs.find({songName: {$exists: true}}, {artist: 1, songName: 1, _id: 1} ).fetch().sort({artist: 1});
		return Songs.find({songName: {$exists: true}}, {artist: 1, songName: 1, _id: 1});
	},
	songs: function() {
		var nxtSong = Songs.findOne({_id: 'currentSong'}, {_id:0, currentSongName: 1} );
		if (nxtSong == undefined) return ;
		return Songs.find({songName: nxtSong.currentSongName});
	},
	roomId: function() {
		return roomId = Rooms.find({url: Session.get('roomId')}).fetch()[0].name;
	},
	hideChords: function() {
		return Session.get('hideChords');
	}
});

// var hideChords = false;
Session.set('hideChords', false);
Template.room.events({
	'change #nextSong': function(e) {
		e.preventDefault();
		Songs.update(
			{_id: 'currentSong'},
			{$set: {currentSongName: e.target.value}},
			{upsert: true}
		);
		var roomId = Rooms.findOne({url: Session.get('roomId')})._id;
		// TODO: нужно разделить artist и song (проверять на уникальность по обоим значениям)
		var artist = Songs.findOne({songName: e.target.value}).artist;
		Rooms.update(
			{_id: roomId},
			{$set: {
				songName: e.target.value,
				artist: artist
			}}
		);
	},
	'change #hideChords': function(e) {
		e.preventDefault();
		var hideChords = Session.get('hideChords');
		hideChords = hideChords?false:true;
		Session.set('hideChords', hideChords);
		console.log(hideChords);
		$('.chord').toggle();
	}
});

Template.songLyric.onRendered(function(){
	var hideChords = Session.get('hideChords');
	console.log(hideChords);
	if (hideChords) {
		$('.chord').hide();
	}
});

// rooms
Template.rooms.helpers({
	rooms: function() {
		return Rooms.find();
	},
});




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
});

var hideChords = false;
Template.room.events({
	'change #nextSong': function(e) {
		e.preventDefault();
		Songs.update(
			{_id: 'currentSong'},
			{$set: {currentSongName: e.target.value}},
			{upsert: true}
		);
		var roomId = Rooms.find({url: Session.get('roomId')}).fetch()[0]._id;
		// TODO: нужно разделить artist и song (проверять на уникальность по обоим значениям)
		var artist = Songs.find({songName: e.target.value}).fetch()[0].artist;
		// console.log(artist.fetch());
		Rooms.update(
			// {url: Session.get('roomId')},
			{_id: roomId},
			{$set: {
				songName: e.target.value,
				artist: artist
			}}
			// {upsert: true}
		);
	},
	'change #hideChords': function(e) {
		e.preventDefault();
		hideChords = hideChords?false:true;
		$('.chord').toggle();
	}
});

Template.songLyric.onRendered(function(){
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




Template.index.helpers({
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
Template.index.events({
	'change #nextSong': function(e) {
		e.preventDefault();
		Songs.update(
			{_id: 'currentSong'},
			{$set: {currentSongName: e.target.value}},
			{upsert: true}
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
Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function() {
	this.route('landing', {
		path: '/'
	});
	this.route('userAccounts', {
		path: '/auth'
	});
	this.route('rooms', {
		path: '/rooms'
	});
	this.route('room', {
		path: '/room/:_id',
		data: function(){
			var currentRoom = this.params._id;
			return Rooms.findOne({ name: currentRoom });
		}
	});
});
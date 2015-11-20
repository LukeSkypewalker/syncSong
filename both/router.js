Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function() {
	this.route('landing', {
		path: '/'
	});
	// this.route('songs', {
	// 	path: '/songs'
	// });
	this.route('userAccounts', {
		path: '/auth'
	});
	this.route('rooms', {
		path: '/rooms'
	});
});
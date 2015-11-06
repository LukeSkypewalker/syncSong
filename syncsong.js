Songs = new Mongo.Collection("songs");

 
if (Meteor.isClient) {
  Template.body.helpers({
    songNames: function () {
      return Songs.find();
    },    
    songs: function () {
      var nxtSong = Songs.findOne({_id: 'currentSong'}, {_id:0,currentSongName: 1} );
      if (nxtSong == undefined) return ;
      return Songs.find({songName: nxtSong.currentSongName});
      //return Songs.find({songName: Session.get('nextSong')});
    }

  });


  Template.body.events({
    'submit form': function (e) {
      e.preventDefault();   
      Songs.update( 
        {_id: 'currentSong'}, 
        {$set: {currentSongName:$(e.target).find('[name=nextSong]').val()}}, 
        {upsert: true});
      //var nxtSong = ;
      //Songs.find({name: nxtSong});
      //Session.set('nextSong', Songs.find({_id: 'currentSong'}) ); 
      //Session.set('nextSong', $(e.target).find('[name=nextSong]').val() );
    }
  });

}

Songs = new Mongo.Collection("songs");
 
if (Meteor.isClient) {
  Template.body.helpers({
    songNames: function () {
      return Songs.find({songName: {$exists: true}}, {name: 1, _id: 0});
    },    
    songs: function () {
      var nxtSong = Songs.findOne({_id: 'currentSong'}, {_id:0,currentSongName: 1} );
      if (nxtSong == undefined) return ;
      return Songs.find({songName: nxtSong.currentSongName});
    },

    //TODO: move toggleChords function from HTML to JS (here)
    // tglChords:function (showHideDiv, switchButton) {
    //   var ele = document.getElementById(showHideDiv);
    //   var text = document.getElementById(switchButton);
    //   if(ele.style.display == "block") {
    //         ele.style.display = "none";
    //   text.innerHTML = "показать аккорды";
    //   }
    // else {
    //   ele.style.display = "block";
    //   text.innerHTML = "спрятать аккорды";
    //   }
    // } 

  });


  Template.body.events({
    'submit form': function (e) {
      e.preventDefault();   
      Songs.update( 
        {_id: 'currentSong'}, 
        {$set: {currentSongName:$(e.target).find('[name=nextSong]').val()}}, 
        {upsert: true});
    }
  });

}

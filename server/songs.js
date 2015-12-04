Meteor.startup (function() {
	Meteor.publish("songs", function () {
		return Songs.find();
	});
	if (Songs.find().count() === 0) {
		Songs.insert({artist:'Николай Гринько', songName:'Протон-М', lyric: Assets.getText('songs/nikolay grinko - proton-m.txt')});
		Songs.insert({artist:'Смысловые галюцинации', songName:'Звезды 3000', lyric: Assets.getText('songs/smislovie galucinacii - zvezdi3000.txt')});
		Songs.insert({artist:'Ария', songName:'Засыпай', lyric: Assets.getText('songs/aria - zasipay.txt')});
		Songs.insert({artist:'Сердце дурака', songName:'Московская', lyric: Assets.getText('songs/serdce duraka - moskovskaya.txt')});
		Songs.insert({artist:'Мельница', songName:'Двери Тамерлана', lyric: Assets.getText('songs/melnitca - tamerlan.txt')});
		Songs.insert({artist:'Гpигорий Лeпс', songName:'Онa нe твoя', lyric: Assets.getText('songs/grigory leps - ona ne tvoya.txt')});
		Songs.insert({artist:'Семен Слепаков', songName:'Песня про трусы', lyric: Assets.getText('songs/slepakov - trusi.txt')});
		Songs.insert({artist:'Семен Слепаков', songName:'Залепи свое дуло', lyric: Assets.getText('songs/slepakov - zalepi.txt')});
		Songs.insert({artist:'Маша и Медведи', songName:'Любочка', lyric: Assets.getText('songs/masha i medvedi - lubochka.txt')});
		Songs.insert({artist:'Юрий Визбор', songName:'Ты у меня одна', lyric: Assets.getText('songs/yury visbor - ti u menya odna.txt')});
		Songs.insert({artist:'Из мультиков', songName:'мы бандито, гангстерито', lyric: Assets.getText('songs/mult - bandito.txt')});
		Songs.insert({artist:'Найк Борзов', songName:'Верхом на звезде', lyric: Assets.getText('songs/naik borzov - verhom na zvezde.txt')});
		Songs.insert({artist:'Бременские музыканты', songName:'Луч солнца золотого', lyric: Assets.getText('songs/bremenskie - luch solntca zolotogo.txt')});
		Songs.update({_id: 'currentSong'}, {$set : {currentSongName:'Верхом на звезде'}}, {upsert: true});
	};
});
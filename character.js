$(document).ready(function(){
var aRealChars = new Array(

{"imgsrc":"http://i19.servimg.com/u/f19/19/18/46/77/kuchik11.jpg",
"avaname":"Kuchiki Byakuya",
"anime":"Bleach",
"charname":"Kishimoto Kano",
"charurl":"http://heroes-of-gods.forumieren.com/u1"},

{"imgsrc":"http://i19.servimg.com/u/f19/19/18/46/77/kanako10.jpg",
"avaname":"Maya Fey",
"anime":"Phoenix Wright: Ace Attorney (I - III)",
"charname":"Kanako Azami",
"charurl":"http://heroes-of-gods.forumieren.com/u2"}
);

var aFicChars = new Array(
{"imgsrc":"http://i19.servimg.com/u/f19/19/18/46/77/saber_10.jpg",
"avaname":"Saber",
"anime":"Fate Multiversum",
"charname":"Kazuki Elsie",
"charurl":"http://heroes-of-gods.forumieren.com/u3"},

{"imgsrc":"http://i19.servimg.com/u/f19/19/18/46/77/honoka10.jpg",
"avaname":"Stephanie Dola ",
"anime":"No Game no Life",
"charname":"Honoka Shiro",
"charurl":"http://heroes-of-gods.forumieren.com/u4"},

{"imgsrc":"http://i19.servimg.com/u/f19/19/18/46/77/tetsuy10.jpg",
"avaname":"Archer",
"anime":"Fate Stay/Night UBW",
"charname":"Kiyoshi Tetsuya",
"charurl":"http://heroes-of-gods.forumieren.com/u6"}


);

$.each(aRealChars, function(index,val){
$('#realChars').append('<div class="character"><img src="'+val.imgsrc+'" alt="'+val.avaname+' aus '+val.anime+'" title="'+val.avaname+' aus '+val.anime+'" /><br /><strong>Name:</strong><br />'+val.avaname+'<br /><strong>Manga/Spiel:</strong><br /><span class="other">'+val.anime+'</span><br/><strong>reserviert f&uuml;r:</strong><br /><a href="'+val.charurl+'" >'+val.charname+'</a></div>');
});

$.each(aFicChars, function(index,val){
$('#ficChars').append('<div class="character"><img src="'+val.imgsrc+'" alt="'+val.avaname+' aus '+val.anime+'" title="'+val.avaname+' aus '+val.anime+'" /><br /><strong>Name:</strong><br />'+val.avaname+'<br /><strong>Manga/Spiel:</strong><br /><span class="other">'+val.anime+'</span><br/><strong>reserviert f&uuml;r:</strong><br /><a href="'+val.charurl+'" >'+val.charname+'</a></div>');
});

});
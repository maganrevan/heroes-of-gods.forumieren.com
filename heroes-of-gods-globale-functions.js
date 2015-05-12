var oWarrior = {HP: 350, DEF: 15, MP:20, ATK:35, EXP: 0};
var oArcher = {HP:230, DEF: 10, MP: 45, ATK:25, EXP: 0};
var oMage = {HP: 175, DEF: 5, MP: 65, ATK:10, EXP: 0};

$(document).ready(function(){
    
    //set the subnavi at the right position
    $('.hierarchy').parent().each(function(){
        $(this).children('br').detach();
        $(this).children('h2.hierarchy').after('<br />');
    });

    
//set arrayelements of display:none

var aLinks = ["/calendar","/faq","/search"];
for (i = 0; i < aLinks.length; i++) { 
$('.navlinks').children().children('a[href="'+aLinks[i]+'"]').parent().css("display","none");
}

//delete the subnavi if you roll a six size
$('.content').find(':contains("folgende Handlung ausgef�hrt:")').each(function(){
$(this).parent().parent().children('.profile-icons').css('display','none');
});

//set active navi
var sUrl = $(location).attr('href');
var aUrl = sUrl.split("/").reverse();
var aCurrent = aUrl[0].split("?");
if(aCurrent != ""){
$('.navlinks').children().children('a[href*="/'+aCurrent[0]+'"]').addClass('active');
}
else{
$('.navlinks').children().children('a[href="/"]').addClass('active');
};

//trigger the current Input
if($('#textarea_content').length){
$('<div><span id="counter"></span>&nbsp;<span id="words"></span></div>').appendTo('#postingbox .fields1');
setInterval(function(){
var iCounter = $('#textarea_content').children('.sceditor-container').children('textarea').val().split(/[\s,]+/).length-1;
$('#counter').html(iCounter);
if(iCounter === 1){
$('#words').html('Wort');
}
else{
$('#words').html('W&ouml;rter');
}
},500);
};

//leveldesign
var aWarriorLast = new Array(oWarrior.HP, oWarrior.MP, oWarrior.ATK, oWarrior.DEF, oWarrior.EXP);
var aArcherLast = new Array(oArcher.HP, oArcher.MP, oArcher.ATK, oArcher.DEF, oArcher.EXP);
var aMageLast = new Array(oMage.HP, oMage.MP, oMage.ATK, oMage.DEF, oMage.EXP);
for(var i = 1; i<101;i++){
$('#warrior').children('tbody').append('<tr><td>'+i+'</td><td>'+aWarriorLast[0]+'</td><td>'+aWarriorLast[1]+'</td><td>'+aWarriorLast[2]+'</td><td>'+aWarriorLast[3]+'</td><td>'+aWarriorLast[4]+'</td></tr>');
aWarriorLast[0] += 57;
aWarriorLast[1] += 5;
aWarriorLast[2] += 25;
aWarriorLast[3] += 29;
aWarriorLast[4] += i+150;

$('#archer').children('tbody').append('<tr><td>'+i+'</td><td>'+aArcherLast[0]+'</td><td>'+aArcherLast[1]+'</td><td>'+aArcherLast[2]+'</td><td>'+aArcherLast[3]+'</td><td>'+aArcherLast[4]+'</td></tr>');
aArcherLast[0] += 20;
aArcherLast[1] += 13;
aArcherLast[2] += 14;
aArcherLast[3] += 11;
aArcherLast[4] += i+150;

$('#mage').children('tbody').append('<tr><td>'+i+'</td><td>'+aMageLast[0]+'</td><td>'+aMageLast[1]+'</td><td>'+aMageLast[2]+'</td><td>'+aMageLast[3]+'</td><td>'+aMageLast[4]+'</td></tr>');
aMageLast[0] += 16;
aMageLast[1] += 23;
aMageLast[2] += 6;
aMageLast[3] += 13;
aMageLast[4] += i+150;
}

});
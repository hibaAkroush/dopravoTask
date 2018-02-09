
function load() {
var data = elems.elements
console.log(data)


_.each(data,function(val,i){
console.log(val.background)
var box = '<div id = "box"></div>'
var p1img = '<img src =' + val.playerOneImg +' id="playerOneImg"/>'
var p2img = '<img src =' + val.playerTwoImg + ' id="playerTwoImg"/>'
var titlelogo = '<img src =' + val.titleLogo + ' id="titleLogo"/>'
var p1name = '<p>'+val.playerOneName+'</p>'
var p2name = '<p>'+ val.playerTwoName +'</p>'
var vs = '<p id="vs">' + val.vs + '</p>'
var title ='<p id="title">' + val.title + '</p>'
var date = '<p id="date">' + val.date + '</p>'
var time = '<p id="time">' + val.time + '</p>'
var place = '<p id="place">' + val.place + '</p>'
var event = '<p id="event">' + val.event + '</p>'
var seats = '<p id="seats">' + val.seatsRemaining +  'Remaining of'  + val.seatsTotal +  'Seats</p>'
var background = '<img src =' + val.background +' id="backgroundImg"/>'
var coming = '<img src =' + val.coming +' id="coming"/>'
$("#element"+i).append(coming, background, seats, event, place, time, date, title, vs,titlelogo, box, p2img, p1img, p2name, p1name)
	})

$('.multiple-items').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 2,
   dots: false,
   	prevArrow: false,
   nextArrow: false
});
}


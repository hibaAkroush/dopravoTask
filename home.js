
function load() {
var data = elems.elements

var dummyData = listDummy.dummyElements
console.log(dummyData)

_.each(dummyData,function(val,i){
	var background = '<img src =' + val.background +' id="dummyBackround"/>'
	var dummy = '<p id = "dummyDummy">'+ val .dummy +'</p>'
	var lorum = '<p id = "dummyLorum">'+ val.lorum +'</p>'
	var number = '<p id = "dummyNumber">'+ val.number +'</p>'

	$("#dummy"+i).append(background, dummy, lorum, number)
});

_.each(data,function(val,i){
var box = '<div id = "box"></div>'
var p1img = '<img src =' + val.playerOneImg +' id="playerOneImg"/>'
var p2img = '<img src =' + val.playerTwoImg + ' id="playerTwoImg"/>'
var titlelogo = '<img src =' + val.titleLogo + ' id="titleLogo"/>'
var p1name = '<p id = "playerOneName">'+ val.playerOneName+'</p>'
var p2name = '<p id = "playerTwoName">'+ val.playerTwoName +'</p>'
var vs = '<p id="vs">' + val.vs + '</p>'
var title ='<p id="title">' + val.title + '</p>'
var date = '<p id="date">' + val.date + '</p>'
var time = '<p id="time">' + val.time + '</p>'
var place = '<p id="place">' + val.place + '</p>'
var event = '<p id="event">' + val.event + '</p>'
var seats = '<p id="seats">' + val.seatsRemaining +  ' Remaining of '  + val.seatsTotal +  ' Seats</p>'
var background = '<img src =' + val.background +' id="backgroundImg"/>'
var coming = '<img src =' + val.coming +' id="coming"/>'

$("#element"+i).append(box, background, coming,  p1img, p2img, p2name, p1name, seats, event, place, time, date, title, vs, titlelogo)
});

$('.multiple-items').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 2,
   dots: false,
   	prevArrow: false,
   nextArrow: false
});

	$("#element1").on("mouseover",function () {
		$("#ticket").show()
		$("#trick").show()
	})
	$("#element1").on("mouseout",function () {
		$("#ticket").hide()
		$("#trick").hide()
	})
}



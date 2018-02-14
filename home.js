
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
if(i===1){
	$("#elementFake"+1).append(box, background, coming,  p1img, p2img, p2name, p1name, seats, event, place, time, date, title, vs, titlelogo)
}
if(i===2){
	$("#elementFake"+3).append(box, background, coming,  p1img, p2img, p2name, p1name, seats, event, place, time, date, title, vs, titlelogo)
}
if(i===3){
	$("#elementFake"+0).append(box, background, coming,  p1img, p2img, p2name, p1name, seats, event, place, time, date, title, vs, titlelogo)
}
if(i===4){
	$("#elementFake"+2).append(box, background, coming,  p1img, p2img, p2name, p1name, seats, event, place, time, date, title, vs, titlelogo)
}
});

$('.multiple-items').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 2,
   dots: false,
   	prevArrow: false,
   nextArrow: false
});
	event.preventDefault();			
    $("#element"+1).append($("#ticket"),$("#trick"))

	jQuery(function( $ ){
	    $( "#element1" ).hover(
	        function(){
	            console.log( "mouseEnter" );
				$("#ticket").animate({"top":"90px"}, function () {
					$("#ticket").fadeIn(100)
				})				
				$("#trick").show()            
	        },
	        function(){
	            console.log( "mouseLeave" );
				$("#ticket").animate({"top":"102px"}, function () {
					$("#ticket").fadeOut(100)
				})							
				$("#trick").hide();          
	        }
	    );
	});

	$("#ticket").on("click", function () {
		$("#page1Container").hide();

		$("#menu").animate({"left": "-60px"}, 0, function () {
			$("#menu").animate({"left": "0px"})
		});


		$("#page2Pic").show(0,function () {
			$("#page2Pic").animate({"left": "478px"})
		});

		$("#page2Container").show();
		$("#rightsReserved").css({"top":"540px"})
		$("#menu").css({"height":"560px"})
	});

	$("#input").on("click", function () {
		$("#value").hide();
		// $("#searchButton").css({ "border-style": "solid"});,"searchButton2","searchButton"
		$("#input").css({"border-color": "coral"});
		$("#searchButton2").css({"border-color": "coral"});
		$("#searchButton").css({"border-color": "coral"});
	})

	jQuery(function( $ ){
	    $( "#PurchaseTicketsContainer" ).hover(
	        function(){
	            console.log( "mouseEnter PurchaseTicketsContainer" );
				$("#PurchaseTickets").animate({"top":"417px"})	
				$("#PurchaseTicketsText").animate({"top":"420px"})			         
	        },
	        function(){
	            console.log( "mouseLeave PurchaseTicketsContainer" );
				$("#PurchaseTickets").animate({"top":"427px"})	
				$("#PurchaseTicketsText").animate({"top":"430px"})							        
	        }
	    );
	});

$('body').click(function(e) {
    if ($(e.target).closest('#searchContainer').length === 0) {
    	$("#value").show();
        console.log("clcked oytside search")
        $("#input").css({"border-color": ""});
		$("#searchButton2").css({"border-color": ""});
		$("#searchButton").css({"border-color": ""});
    }
});

$("#listContainerP2 img").hover(function () {
	$(this).css({"height":"30px"})
	$(this).css({"width":"30px"})
},function () {
	$(this).css({"height":"28px"})
	$(this).css({"width":"28px"})
})
}

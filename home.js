
function load() {
var data = elems.elements
console.log(data)

_.each(data,function(val,i){
console.log(val.background)
var box = '<div id = "box"></div>'
var p1img = '<img src =' + val.playerOneImg +' id="playerOneImg"/>'
var p2img = '<img src =' + val.playerTwoImg + 'id="playerTwoImg"/>'
var titlelogo = '<img src =' + val.titleLogo + 'id="titleLogo"/>'
var p1name = '<p>'+val.playerOneName+'</p>'
var p2name = '<p>'+ val.playerTwoName +'</p>'

// 		<p id="vs">{vs}</p>
// 		<p id="title">{title}</p>
// 		<p id="date">{date}</p>
// 		<p id="time">{time}</p>
//      <img id="loc" src={loc}/>
// 		<p id="place">{place}</p>
// 		<p id="event">{event}</p>
// 		<p id="seats">{seatsRemaining} Remaining of {seatsTotal} Seats</p>

$("#element"+i).append(p2name, p1name)
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

// const backgroundImg = props.elem.background
// 	const playerOneName =props.elem.playerOneName
// 	const playerOneImg=props.elem.playerOneImg
// 	const playerTwoName=props.elem.playerTwoName
// 	const playerTwoImg=props.elem.playerOneImg
// 	const vs=props.elem.vs
// 	const title=props.elem.title
// 	const titleLogo=props.elem.titleLogo
// 	const coming=props.elem.coming
// 	const date=props.elem.date
// 	const time=props.elem.time
// 	const place=props.elem.place
// 	const event=props.elem.event
// 	const seatsRemaining=props.elem.seatsRemaining
// 	const seatsTotal =props.elem.seatsTotal
// 	return (
// 		<div>
// 		<img src = {backgroundImg} id="backgroundImg"/>
// 		<div id = "box"></div>
// 		<img src = {playerOneImg} id="playerOneImg"/>
// 		<img src = {playerTwoImg} id="playerTwoImg"/>
// 		<img src = {titleLogo} id="titleLogo"/>
// 		<img src = {coming} id="coming"/>
// 		<p id="playerOneName">{playerOneName}</p>
// 		<p id="playerTwoName">{playerTwoName}</p>
// 		<p id="vs">{vs}</p>
// 		<p id="title">{title}</p>
// 		<p id="date">{date}</p>
// 		<p id="time">{time}</p>
//      <img id="loc" src={loc}/>
// 		<p id="place">{place}</p>
// 		<p id="event">{event}</p>
// 		<p id="seats">{seatsRemaining} Remaining of {seatsTotal} Seats</p>

// 		</div>
// 		)
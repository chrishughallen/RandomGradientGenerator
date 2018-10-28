const getNum = (num) => Math.floor(Math.random()*num)
let currentColor
const SPACEBAR = 32
const ENTER = 13
const directions = [
'to top', 
'to bottom', 
'to right', 
'to left', 
'to bottom right',
'to bottom left',
'to top right',
'to top left'
]
const direction = () => directions[getNum(directions.length)]

const getRgb = () =>{
	let color = []
	for(let i = 0;i<3;i++){
		color.push(getNum(255))
	}
	return "rgb(" + color.join() + ")"
}

const getGradient = () =>{
	let newColor = "linear-gradient("
	newColor += direction() + ","
	newColor += getRgb() + ","
	newColor += getRgb() + ","
	newColor += getRgb() + ")"
	return newColor
}

const changeBg = () =>{
	currentColor = getGradient()
	$('body').css({
		background:currentColor
	})
}

$('document').ready(function(){
	changeBg()
})
$('body').on('keyup', function(e){
	if(e.keyCode === SPACEBAR){
		changeBg()
	}
	if(e.keyCode === ENTER){
		$('#currentColor').text(currentColor)
		$('#bgModal').modal('show');
	}
})

$('#newBtn').on('click',function(){
	changeBg()
})

$('#viewBtn').on('click',function(){
	$('#currentColor').text(currentColor)
	$('#bgModal').modal('show');
})


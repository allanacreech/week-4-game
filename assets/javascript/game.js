$ (document).ready(function(){

	crystals = ['assets/images/blueGem.png', 'assets/images/greenGem.png','assets/images/pearlGem.png', 'assets/images/redGem.png']


//Global variable
var counter = 0;

var wins = 0;

var losses = 0;

$('.wins').text(wins);
$('.loss').text(losses);

newCrystals();
newGame();


//code for computer number guess
function newCrystals () {
	var numbers = []
	while(numbers.length < 4){
		var randomNumber = Math.ceil(Math.random()*12)
		var found = false;
		for (var i=0; i<numbers.length; i++){
			if (numbers[i] == randomNumber){
				found = true; break
			}
		}
		if(!found)numbers[numbers.length]=randomNumber;
	}
	console.log(numbers);

	for(i = 0; i < numbers.length; i++){
		var imageCrystal = $('<img>');
		imageCrystal.attr('data-num',numbers[i]);
		imageCrystal.attr('src',crystals[i]);
		imageCrystal.attr('alt','crystals');
		imageCrystal.addClass('crystalIamge');
		$('.gemStoneImages').append(imageCrystal);
		newGame();
	}


}

//function to start game
function newGame(){
	
	//counter will each game starts at 0
	counter = 0;
	$('.yourScore').text(counter);

	function randomIntFromInterval(min,max){
		return Math.floor(Math.random()*(max-min+1)+min);
	}
//variable to have random number
var numberToGuess = randomIntFromInterval(19,120);

$('.value').text(numberToGuess);

//function to click on gemstones

$(".crystalIamge").on('click', function(){
	counter += parseInt($(this).data('num'));
	
	
//code to how what number they need to guess
$(".yourScore").text(counter);

if (counter == numberToGuess){
	$('#status').text("You Got the Gemstones!");
	wins++;
	$('.wins').text(wins);
	console.log(wins)
	$('#crystals').empty();
	newCrystals();
	newGame(); 
}
else if(counter > numberToGuess){
	$('#status').text('You Got Eaten!')
	losses++;
	$('.loss').text(losses);
	console.log(losses)
	$('#crystals').empty();
	newCrystals();
	newGame();
}
});

}

});
let dial ; 
let output;
let status = false;
let num = 0;
let count = 0;

function enterKey(event){
	if(event.keyCode == 13) {
			typeInput();
	}
}


function typeInput(){
	dial = document.getElementById("text-box").value;
    localStorage.setItem('input', dial);
   decide();
   count++

}

function decide(){
	if (status == false ){
		chatBot();
	}

	if(status == true){
		display();
	}
}


function display(){
	

output = localStorage.getItem('input');

document.getElementById('chat-output').innerHTML = dial;

if(status= false){
	chatBot();


}

}


function chatBot(){

let loCase = dial.toLowerCase();

if(num == 0){
let result = "Hi " + dial + "! How are you doing today?"

document.getElementById('chat-output').innerHTML = result;
num++;
}



if(loCase.match("good")|| loCase.match("great")||loCase.match("well")||loCase.match("wonderful")){
document.getElementById('chat-output').innerHTML = "That's good! What's your favorite color?";
} else if (loCase.match("not")|| loCase.match("ok")) {
document.getElementById('chat-output').innerHTML = "Tell me what's wrong!";} 

if(loCase.match("I")||loCase.match("today")||loCase.match("late")){
	document.getElementById('chat-output').innerHTML = "Are you feeling better?";
}

if(loCase.match("yes")|| loCase.match("yea")){
document.getElementById('chat-output').innerHTML = "So are you having a good day?";
}

if(loCase.match("no")|| loCase.match("nah")||loCase.match("tired")){
document.getElementById('chat-output').innerHTML = "Go take a nap";
}

if(loCase.match("blue")||loCase.match("yellow")||loCase.match("purple")||loCase.match("orange")||loCase.match("grey")||loCase.match("green")){
document.getElementById('chat-output').innerHTML = dial + " is my favorite color too! Did you get enough sleep today?";
}

if (count>=4){
	document.getElementById('chat-output').innerHTML ="We have been talking for a while, BYE!";
}

}


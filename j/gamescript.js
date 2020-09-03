// Variables for needed elements.
const intro = document.getElementById("intro");
const nameForm = document.getElementById("name");
const greeting = document.getElementById("greeting");

const directionQ = document.getElementById("directionQ");
const left = document.getElementById("left");
const right = document.getElementById("right");
const dirResult = document.getElementById("dirResult");

const seasonQ = document.getElementById("seasonQ");
const weather = document.getElementById("weather");

const colorQ = document.getElementById("colorQ");
const faveColor = document.getElementById("faveColor");
const goodbye = document.getElementById("goodbye");

// Function to display next question after answering.
function showQuestion(q) {
	setTimeout(function(){
		q.style.display = "block";
	}, 2000)
	console.log(`Showing ${q.id}...`)
}

// Creating an event to show direction question.
const showDirectionQ = new Event("showDirectionQ")
directionQ.addEventListener("showDirectionQ", function() {
	showQuestion(directionQ);
});

// Creating an event to show season question.
const showSeasonQ = new Event("showSeasonQ");
seasonQ.addEventListener("showSeasonQ", function() {
	showQuestion(seasonQ);
});

// Showing color question.
const showColorQ = new Event("showColorQ");
colorQ.addEventListener("showColorQ", function() {
	showQuestion(colorQ);
})

// Entering name.
nameForm.addEventListener('keyup', function(event) {
	if (event.key === 'Enter') {
		getName();
	}
});

function getName() {
	let name = document.getElementById("name").value;
	
	if (name.length === 0) {
		greeting.textContent = "type your name, silly!"
	} else{
	console.log(name);
	greeting.textContent = "hey there, " + name + 
	name[name.length - 1].repeat(4) + ".";
	nameForm.disabled = true;
	const nameButton = document.getElementById("nameButton");
	nameButton.disabled = true;

	intro.style.color = 'grey';
	directionQ.dispatchEvent(showDirectionQ);

	return name;
	}
}

// Choosing a direction.
function go(direction) {
	dirResult.textContent = 
	'you go ' + direction.id + '.';

	direction.style.backgroundColor = "green";

	left.disabled = true;
	right.disabled = true;

	greeting.style.color = 'grey';
	directionQ.style.color = 'grey';
    seasonQ.dispatchEvent(showSeasonQ);
}

// Choosing a season.
function changeSeason(faveSeason) {
	let season = faveSeason;

	switch (season) {
		case 'spring':
			document.body.style.backgroundColor = "#E0EDC5";
			weather.style.backgroundImage = "url(i/blossoms.gif)";
			weather.style.backgroundRepeat = "repeat";
			break;
		case 'summer':
			document.body.style.backgroundColor = "#E7CEE3";
			weather.style.backgroundImage = "url(i/sun.gif)";
			weather.style.backgroundRepeat = "no-repeat";
			break;
		case 'autumn':
			document.body.style.backgroundColor = "#D8A183";
			weather.style.backgroundImage = "url(i/leaves.gif)";
			weather.style.backgroundRepeat = "repeat";
			break;
		case 'winter':
			document.body.style.backgroundColor = "#6C93BD";
			weather.style.backgroundImage = "url(i/snow.gif)";
			weather.style.backgroundRepeat = "repeat";
			break;
		default:
			console.log('Something went wrong.')
	}

	const seasonButtons = document.getElementsByClassName("seasonButton");
	for (let i = 0; i < seasonButtons.length; i++) {
		seasonButtons[i].disabled = true;
	}

	dirResult.style.color = 'grey';
	seasonQ.style.color = 'grey';
	colorQ.dispatchEvent(showColorQ);
}

// Choosing a color.
function submitColor() {
	const colorChoice = faveColor.value;
	const name = getName();
	const styledName = 
	`<em style="color:${colorChoice}">${name}</em>`;

	goodbye.innerHTML = `nice choice, ${styledName} !`;
	goodbye.innerHTML += "<br>it's been nice talkin' to you."

	colorQ.style.color = 'grey';
	faveColor.disabled = true;
	document.getElementById("colorButton").disabled = true;
}

















import grid from './modules/grid.js';

grid.init();



document.addEventListener("keyup", function (e) {
	let direction = null;

	if (e.keyCode === 38) {
		direction = "UP";
	} else if (e.keyCode === 39) {
		direction = "RIGHT";
	} else if (e.keyCode === 40) {
		direction = "DOWN";
	} else if (e.keyCode === 37) {
		direction = "LEFT";
	}

	if (direction !== null) {
		grid.slide(direction);
	}

	return false;
});


// touch mobile with hammer

// var myElement = document.getElementById('wrapper');
var myElement = document.querySelector('.wrapper');
var mc = new Hammer(myElement);

//enable all directions
mc.get('swipe').set({
  direction: Hammer.DIRECTION_ALL,
  threshold: 1, 
  velocity:0.1
});

// listen to events...
mc.on("swipeup swipedown swipeleft swiperight tap press", function(ev) {
	let direction = null;
	
	if (ev.type === 'swiperight') {
		direction = "RIGHT";
	} else if (ev.type === 'swipeleft') {
		direction = "LEFT";
	} else if (ev.type === 'swipeup') {
		direction = "UP";
	} else if (ev.type === 'swipedown') {
		direction = "DOWN";
	}

	if (direction !== null) {
		grid.slide(direction);
	}

	return false;
});


// listen voice AI move game

var alanBtnInstance = alanBtn({
	key: "90307e8608d5558e8868eff283c9f0fb2e956eca572e1d8b807a3e2338fdd0dc/stage",
	// onCommand: function (commandData) {
	// 	if (commandData.command === "go:back") {
	// 		//call client code that will react on the received command
	// 	}
	// },
	onCommand: function(commondData) {
		let directionVoice = null;
		if (commondData.command === 'go-left') {
			directionVoice = "LEFT";
		}

		if (commondData.command === 'go-right') {
			directionVoice = "RIGHT";
		}
		if (commondData.command === 'go-up') {
			directionVoice = "UP";
		}
		if (commondData.command === 'go-down') {
			directionVoice = "DOWN";
		}

		if (directionVoice !== null) {
			grid.slide(directionVoice);
		}
		return false;

	},
	rootEl: document.getElementById("alan-btn"),
});


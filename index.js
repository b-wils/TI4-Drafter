var NUM_PLAYERS = 4;
var RACES_PER_PLAYER = 3;
var DRAFT_SPEAKER = true;

var SPEAKER_TEXT = "Starting Speaker"

var RACES = [
	"The Xxcha Kingdom",
	"The Federation of Sol",
	"The Emirates of Hacan",
	"The Barony of Letnev",
	"The Universities of Jol-Nar",
	"The Sardakk N`orr",
	"The Yssaril Tribes",
	"The Arborec",
	"The Clan of Saar",
	"The Winnu",
	"The Embers of Muaat",
	"The Mentak Coalition",
	"The Naalu Collective",
	"The Yin Brotherhood",
	"The L1Z1X Mindnet",
	"The Ghosts of Creuss",
	"The Nekro Virus"
]

var shuffledRaces = randomizeArray(RACES);

var numRaces = NUM_PLAYERS * RACES_PER_PLAYER - (DRAFT_SPEAKER ? 1 : 0);

var activeRaces = shuffledRaces.slice(0, numRaces);

// Add speaker after we shuffle races to ensure it is selected, reshuffle
if (DRAFT_SPEAKER) {
	activeRaces.push(SPEAKER_TEXT);
	activeRaces = randomizeArray(activeRaces);
}

var playerRaces = [];

// Assign Races
while(activeRaces.length > 0) {
	playerRaces.push(activeRaces.splice(0,RACES_PER_PLAYER));
}

console.log(playerRaces)

function randomizeArray(arr) {
	return arr.concat().sort(function(a, b){return 0.5 - Math.random()});
}
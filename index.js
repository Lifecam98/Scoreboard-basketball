const homeDisplay = document.querySelector(".homeScore");
const guestDisplay = document.querySelector(".guestScore");

homeDisplay.value = 0;
guestDisplay.value = 0;

function addOneHome() {
	homeDisplay.value = parseInt(homeDisplay.value) + 1;
}

function addTwoHome() {
	homeDisplay.value = parseInt(homeDisplay.value) + 2;
}

function addThreeHome() {
	homeDisplay.value = parseInt(homeDisplay.value) + 3;
}

function reset() {
	homeDisplay.value = 0;
	guestDisplay.value = 0;
}

function addOneGuest() {
	guestDisplay.value = parseInt(guestDisplay.value) + 1;
}

function addTwoGuest() {
	guestDisplay.value = parseInt(guestDisplay.value) + 2;
}

function addThreeGuest() {
	guestDisplay.value = parseInt(guestDisplay.value) + 3;
}

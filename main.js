const rotatingWords = ["Software Engineer.", "Cloud Builder.", "Systems Thinker."];
let rotatingWordIndex = 0;

function startWordCycler() {
	const target = document.querySelector("[data-random-word]");

	if (!target) {
		return;
	}

	window.setInterval(() => {
		rotatingWordIndex = (rotatingWordIndex + 1) % rotatingWords.length;
		target.textContent = rotatingWords[rotatingWordIndex];
	}, 2600);
}

window.addEventListener("DOMContentLoaded", startWordCycler);

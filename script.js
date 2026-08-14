const soundClick = new Audio("./sounds/click.mp3");
const soundWin = new Audio("./sounds/win.mp3");
const soundLose = new Audio("./sounds/lose.mp3");
soundClick.volume = 0.3;
soundWin.volume = 0.2;
soundLose.volume = 0.3;

let isMuted = false;
const muteBtn = document.querySelector("#mute-btn");

muteBtn.addEventListener("click", () => {
	isMuted = !isMuted;

	if (isMuted) {
		muteBtn.innerHTML = "🔇";
		soundClick.muted = true;
		soundWin.muted = true;
		soundLose.muted = true;
	} else {
		muteBtn.innerHTML = "🔊";
		soundClick.muted = false;
		soundWin.muted = false;
		soundLose.muted = false;
	}
});

const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");

const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const playMachine = () => {
	const choices = ["rock", "paper", "scissors"];
	const randomNumber = Math.floor(Math.random() * 3);

	return choices[randomNumber];
};

const playTheGame = (human, machine) => {
	soundClick.currentTime = 0;
	soundClick.play();

	console.log(`Humano: ${human} | Máquina: ${machine}`);

	if (human === machine) {
		result.style.color = "#FFF000";
		result.innerHTML = "Empate na rodada! 🤝";
	} else if (
		(human === "paper" && machine === "rock") ||
		(human === "rock" && machine === "scissors") ||
		(human === "scissors" && machine === "paper")
	) {
		humanScoreNumber++;
		humanScore.innerHTML = humanScoreNumber;
		result.style.color = "#00FF7F";
		result.innerHTML = "Você Ganhou a rodada! 🎉";

		soundWin.currentTime = 0;
		soundWin.play();
	} else {
		machineScoreNumber++;
		machineScore.innerHTML = machineScoreNumber;
		result.style.color = "#FF0055";
		result.innerHTML = "Máquina Ganhou a rodada! 🤖";

		soundLose.currentTime = 0;
		soundLose.play();
	}
};

const playHuman = (humanChoice) => {
	playTheGame(humanChoice, playMachine());
};

buttonRock.addEventListener("click", () => playHuman("rock"));
buttonPaper.addEventListener("click", () => playHuman("paper"));
buttonScissors.addEventListener("click", () => playHuman("scissors"));

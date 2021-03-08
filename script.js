document.addEventListener("DOMContentLoaded", () => {
	let flyingPaperSound =
		"https://raw.githubusercontent.com/MrGregor228/Notes-For-Piano/master/paper%20sound/flyingpaper.mp3",
		takingPaperSound =
			"https://raw.githubusercontent.com/MrGregor228/Notes-For-Piano/master/paper%20sound/takepaper.mp3",
		rotatingPaper =
			"https://raw.githubusercontent.com/MrGregor228/Notes-For-Piano/master/paper%20sound/paperRotating.mp3",
		stampMachine =
			"https://raw.githubusercontent.com/MrGregor228/Notes-For-Piano/master/paper%20sound/stampmachine.mp3",
		carelessWhisper =
			"https://github.com/MrGregor228/Notes-For-Piano/blob/master/paper%20sound/george-michael_careless-whisper.mp3?raw=true";

	let firstSound = new Audio();
	firstSound.volume = [0.2];
	firstSound.src = flyingPaperSound;

	let secondSound = new Audio();
	secondSound.volume = [0.2];
	secondSound.src = takingPaperSound;

	let thirdSound = new Audio();
	thirdSound.volume = [0.2];
	thirdSound.src = rotatingPaper;

	let playMusic = new Audio();
	playMusic.volume = [0.2];
	playMusic.src = carelessWhisper;

	let letterWrapper = document.querySelector(".letter-wrapper"),
		paper = document.querySelector(".paper"),
		letterCover = document.querySelector(".letter-closure"),
		leftSideOfLetter = document.querySelector(".left-side"),
		centerOfLetter = document.querySelector(".center"),
		rightSideOfLetter = document.querySelector(".right-side"),
		submitName = document.querySelector(".submit-name"),
		askNameInput = document.querySelector(".ask-name input[type=text]");

	let letterWrapperClicked = false;

	let name = "";

	letterWrapper.addEventListener("click", () => {
		letterWrapper.classList.add("clicked");
		if (!letterWrapperClicked) {
			firstSound.play();
			letterWrapperClicked = true;
		}
	});

	const text1 = "зайка, я очень тебя люблю, ты у меня самая лучшая девочка на свете!!!"

	text2 =
		"Пускай красочными будут ваши дни, а в вашей жизни случаются самые настоящие и невероятные чудеса. Желаю теплой, солнечной и радостной весны, чтобы вы всегда были согреты ласковым словом, делом и любовью родных людей. Желаю благополучия, чтобы в вашем доме и сердцах всегда был покой, уют и счастье. С 8 Марта!";

	let options = {
		strings: [text1, text2],
		typeSpeed: 60,
		showCursor: false
	};


	let typed;

	letterCover.addEventListener("click", () => {
		letterCover.classList.toggle("opened");
		secondSound.play();

		if (letterCover.classList.contains("opened")) {
			letterCover.title = "Закрыть";
			playMusic.play();
			thirdSound.play();
			letterCover.classList.toggle("opened");
			leftSideOfLetter.classList.toggle("opened");
			centerOfLetter.classList.toggle("opened");
			rightSideOfLetter.classList.toggle("opened");
			letterWrapper.classList.add("submitted");
			paper.classList.toggle("watch");
			const text = [
				'Зайка, я тебя очень люблю,\n',
				'Ты у меня лучшая девочка,\n',
				'Оставайся такой же прекрасной,\n',
				'И делай то, что нравится.\n'
			];

			let line = 0;
			let count = 0;
			let result = '';
			function typeLine() {
				let interval = setTimeout(
					() => {
						result += text[line][count]
						document.querySelector('#message').innerHTML = result + '|';


						count++;
						if (count >= text[line].length) {
							count = 0;
							line++;
							if (line == text.length) {
								clearTimeout(interval);
								document.querySelector('#message').innerHTML = result;
								return true;
							}
						}
						typeLine();
					}, getRandomInt(getRandomInt(250 * 2.5)))
			}
			typeLine();

			function getRandomInt(max) {
				return Math.floor(Math.random() * Math.floor(max));
			}

		} else {
			letterCover.title = "Открыть";


		}

		leftSideOfLetter.classList.toggle("opened");
		centerOfLetter.classList.toggle("opened");
		rightSideOfLetter.classList.toggle("opened");
	});


	// askNameInput.oninput = () => {
	// 	let keyboardSound = new Audio();
	// 	keyboardSound.src = stampMachine;
	// 	keyboardSound.volume = [0.5];
	// 	keyboardSound.play();
	// };


});


